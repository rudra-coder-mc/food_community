'use client';

import { shareMeal } from '@/lib/action';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ShareMealPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false); // State to track submission status

  // Handle file input change and set the image preview
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrors({});
    setPending(true); // Set pending to true when submission starts

    const formData = new FormData(event.currentTarget);
    const result: { success: boolean, errors: Record<string, string> } = await shareMeal(formData);

    if (result.success == false) {
      // If there are errors, set them to formErrors state
      setFormErrors(result.errors);
    }

    setPending(false); // Set pending to false after submission
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold">
          Share your <span className="text-primary">favorite meal</span>
        </h1>
        <p className="mt-2 text-gray-700">Or any other meal you feel needs sharing!</p>
      </div>

      {/* Form Section */}
      <div className="card bg-base-100 shadow-xl p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="label">Your name</label>
              <input type="text" id="name" name="name" className="input input-bordered w-full" />
              {formErrors.creator && <p className="text-red-500">{formErrors.creator}</p>}
            </div>
            <div>
              <label htmlFor="email" className="label">Your email</label>
              <input type="email" id="email" name="email" className="input input-bordered w-full" />
              {formErrors.creatorEmail && <p className="text-red-500">{formErrors.creatorEmail}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="title" className="label">Title</label>
            <input type="text" id="title" name="title" className="input input-bordered w-full" />
            {formErrors.title && <p className="text-red-500">{formErrors.title}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="summary" className="label">Short Summary</label>
            <input type="text" id="summary" name="summary" className="input input-bordered w-full" />
            {formErrors.summary && <p className="text-red-500">{formErrors.summary}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="instructions" className="label">Instructions</label>
            <textarea id="instructions" name="instructions" rows={10} className="textarea textarea-bordered w-full"></textarea>
            {formErrors.instructions && <p className="text-red-500">{formErrors.instructions}</p>}
          </div>

          {/* Image Picker */}
          <div className="mt-4">
            <label className="label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              required
              className="file-input file-input-bordered w-full"
              onChange={handleImageChange}
            />
            {formErrors.image && <p className="text-red-500">{formErrors.image}</p>}
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-4 w-1/4">
              <label className="label">Image Preview:</label>
              <Image
                src={imagePreview}
                width={100}
                height={100}
                alt="Image Preview"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={pending}
              className="btn btn-primary" // Apply your preferred button styles here
            >
              {pending ? 'Submitting...' : 'Share Meal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

