import MealGrid from '@/components/MealGrid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
// import MealsGrid from '@/components/meals/meals-grid';

export default async function MealsPage() {

  const data = await getMeals()

  return (
    <>
      <header className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold  900 mb-4">
            Delicious meals, created{' '}
            <span className="text-green-600">by you</span>
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
      </header>

      <main className="container mx-auto py-12">
        <MealGrid props={data} />
      </main>
    </>
  );
}

