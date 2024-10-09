import { MealGridProp } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";


export default function MealItem({ title, slug, image, summary, creator }: MealGridProp) {
  return (
    <div className="card border">
      <figure className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill // This allows the image to fill the parent container
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Adjust sizes based on your layout
          style={{ objectFit: 'cover' }} // Maintain object-fit with CSS
          className="rounded-t-lg"
          priority={true} // Optional if the image is above the fold
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm mb-3">By {creator}</p>
        <p className="mb-6">{summary}</p>
        <div className="card-actions flex justify-end">
          <Link href={`/meals/${slug}`} className="btn btn-primary font-semibold">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

