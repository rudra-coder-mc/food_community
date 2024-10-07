import { MealGridProp } from '@/components/MealGrid'
import sql from 'better-sqlite3'

const db = sql('meals.db')

export const getMeals = async (): Promise<MealGridProp[]> => {
  return db.prepare('SELECT * FROM meals').all() as MealGridProp[]
}

