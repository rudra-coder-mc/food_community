'use server';

import { redirect } from 'next/navigation';
import axios from 'axios';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

export async function shareMeal(formData: FormData) {
  const title = (formData.get('title') as string) || '';
  const summary = (formData.get('summary') as string) || '';
  const instructions = (formData.get('instructions') as string) || '';
  const creator = (formData.get('name') as string) || '';
  const creatorEmail = (formData.get('email') as string) || '';
  const imageFile = formData.get('image') as File;

  const errors: Record<string, string> = {};

  // Basic validation
  if (!title.trim()) errors.title = "Title is required.";
  if (!summary.trim()) errors.summary = "Summary is required.";
  if (!instructions.trim()) errors.instructions = "Instructions are required.";
  if (!creator.trim()) errors.creator = "Creator's name is required.";
  if (!creatorEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(creatorEmail)) {
    errors.creatorEmail = "A valid email address is required.";
  }
  if (!imageFile) {
    errors.image = "Image file is required.";
  } else if (!imageFile.type.startsWith('image/')) {
    errors.image = "Only image files are allowed.";
  } else if (imageFile.size > 5 * 1024 * 1024) { // Limit file size to 5MB
    errors.image = "Image size should not exceed 5MB.";
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) return { success: false, errors };

  // Check for Cloudinary environment variables
  const cloudinaryUploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
  const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;

  if (!cloudinaryUploadPreset || !cloudinaryCloudName) {
    console.error('Cloudinary environment variables are not set.');
    errors.image = 'Failed to upload image due to server configuration.';
    return { success: false, errors };
  }

  // Upload the image to Cloudinary
  const formDataToUpload = new FormData();
  formDataToUpload.append('file', imageFile);
  formDataToUpload.append('upload_preset', cloudinaryUploadPreset);

  let uploadedImageUrl = '';
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      formDataToUpload
    );
    uploadedImageUrl = response.data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error); // Log the error details
    errors.image = 'Failed to upload image to Cloudinary';
    return { success: false, errors };
  }

  const meal = {
    title,
    summary,
    instructions,
    image: uploadedImageUrl, // Use the Cloudinary URL
    creator,
    creator_email: creatorEmail,
    slug: title.toLowerCase().replace(/\s+/g, '-'),
  };

  // Save the meal details (including Cloudinary image URL) to the database
  try {
    await saveMeal(meal);
  } catch (dbError) {
    console.error('Database save error:', dbError);
    errors.image = 'Failed to save meal to the database.';
    return { success: false, errors };
  }

  // Revalidate path before redirecting
  await revalidatePath('/meals');

  // Redirect to the meals page
  redirect('/meals');
}

