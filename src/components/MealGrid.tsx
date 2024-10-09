import { MealGridProp } from "@/lib/type"
import MealItem from "./MealItem"

export default function MealGrid({ props }: { props: MealGridProp[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {props.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  )
}

