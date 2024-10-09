import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold  ">
          One shared passion: <span className="text-success">Food</span>
        </h1>
        <p className="text-lg  600 mt-4">
          Join our community and share your favorite recipes!
        </p>
      </div>

      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center  mb-12">
          Community Perks
        </h2>

        {/* Responsive grid layout with dynamic image sizes */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <li className="flex flex-col items-center">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mb-4"
            />
            <p className="text-lg  700">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mb-4"
            />
            <p className="text-lg  700">Find new friends & like-minded people</p>
          </li>
          <li className="flex flex-col items-center">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mb-4"
            />
            <p className="text-lg  ">Participate in exclusive events</p>
          </li>
        </ul>
      </div>
    </>
  );
}

