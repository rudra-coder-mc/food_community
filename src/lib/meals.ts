import sql from 'better-sqlite3'
import { slugify } from './utils'
import xss from 'xss';
import { InputProp, MealGridProp } from './type';

const db = sql('meals.db')

export const getMeals = async (): Promise<MealGridProp[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare('SELECT * FROM meals').all() as MealGridProp[]
}
export const getMeal = async ({ slug }: { slug: string }): Promise<MealGridProp> => {
  // Pass slug as a direct value, not an object
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as MealGridProp;
};

export async function saveMeal(meal: InputProp) {
  meal.slug = slugify(meal.title);
  meal.instructions = xss(meal.instructions);

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);

}
