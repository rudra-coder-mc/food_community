import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const meal = await getMeal({ slug: params.slug });

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const contente = async ({ params }: { params: { slug: string } }) => {
  const data = await getMeal({ slug: params.slug });

  const formatInstructions = (instructions: string) => {
    return instructions
      .trim()
      .split(/\n/)
      .map((step) => step.trim()); // Remove leading/trailing spaces
  };

  const { title, image, summary, creator, instructions } = data;
  const formattedInstructions = formatInstructions(instructions);

  return (
    <div className="container mx-auto p-6">
      {/* Card Wrapper */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {/* Card Image */}
        <figure className="relative w-full lg:w-1/2 h-96 lg:h-auto">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={true}
            className="object-cover rounded-lg lg:rounded-l-lg"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-6 lg:w-1/2">
          <h1 className="card-title text-4xl font-bold mb-2">{title}</h1>
          <p className="mb-4 text-base ">Summary: {summary}</p>

          {/* Recipe Instructions */}
          <div>
            <h2 className="text-xl font-medium mb-2">Instructions</h2>
            <ol className="list-inside space-y-2">
              {formattedInstructions.map((step: string, index: number) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Card Actions */}
          <div className="card-actions justify-between items-center mt-6">
            <p className="text-sm font-semibold text-gray-500">
              Created by: <span className="text-primary">{creator}</span>
            </p>
            <button className="btn btn-primary btn-sm">Save Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default contente;

