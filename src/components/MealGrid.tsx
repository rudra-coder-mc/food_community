import MealItem from "./MealItem"
export interface MealGridProp { id: string, title: string, slug: string, image: string, summary: string, creator: string }

export default function MealGrid({ props }: { props: MealGridProp[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {props.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  )
}

