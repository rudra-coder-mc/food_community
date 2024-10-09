
import MealGrid from '@/components/MealGrid';
import { getMeals } from '@/lib/meals';
export default async function MealData() {

  const data = await getMeals()
  // console.log(data)

  return <MealGrid props={data} />

}
