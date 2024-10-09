import Link from 'next/link';
import { Suspense } from 'react';
import MealData from './MealData';
import Loading from '../loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

export default async function MealsPage() {


  return (
    <>
      <div className="py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold   mb-4">
            Delicious meals, created{' '}
            <span className=" text-success ">by you</span>
          </h1>
          <p className="text-lg  600 mb-6">
            Choose your favorite recipe and cook it yourself. It&apos;s easy and fun!
          </p>
          <p>
            <Link href="/meals/share" className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg">
              Share Your Favorite Recipe
            </Link>
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <Suspense fallback={<Loading />}>
          <MealData />
        </Suspense>
      </div>
    </>
  );
}

