import ImageSlideshow from "@/components/ImageSlider";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-base-100 py-12">
        <div className="container mx-auto">
          {/* Two-column layout: Image Slider (left) and Text (right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left column: ImageSlideshow */}
            <div className="shadow-lg rounded-lg overflow-hidden w-full h-[450px]">
              <ImageSlideshow />
            </div>

            {/* Right column: Text content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">
                NextLevel Food for <span className="text-green-600">NextLevel Foodies</span>
              </h1>
              <p className="text-lg  600 mt-2 mb-6">
                Taste & share food from all over the world.
              </p>

              {/* Call-to-action buttons */}
              <div className="flex flex-col items-center md:flex-row justify-center md:justify-start w-auto space-y-4 md:space-y-0 md:space-x-4">
                <Link
                  href="/community"
                  className="btn btn-success text-white px-6 py-3 rounded-md text-lg transition-colors shadow-md transform hover:scale-105"
                >
                  Join the Community
                </Link>
                <Link
                  href="/meals"
                  className="btn btn-info px-6 py-3 rounded-md text-lg transition-colors shadow-md transform hover:scale-105"
                >
                  Explore Meals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        {/* Information sections in a two-column grid layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: How it works */}
          <div className="px-4 md:px-8">
            <h2 className="text-4xl font-semibold mb-4">How it works</h2>
            <p className="text-base mb-4">
              NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes and connect with other food lovers.
            </p>
            <p className="text-base">
              Discover new flavors and culinary inspirations in our vibrant community.
            </p>
          </div>

          {/* Right column: Why NextLevel Food? */}
          <div className="px-4 md:px-8">
            <h2 className="text-4xl font-semibold mb-4">Why NextLevel Food?</h2>
            <p className="text-base mb-4">
              Whether you’re looking for inspiration or a chance to share your creations, NextLevel Food offers it all. Join a global community of passionate food lovers.
            </p>
            <p className="text-base">
              The best place to share your culinary expertise and explore diverse flavors.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

