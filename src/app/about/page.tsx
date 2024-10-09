import { Metadata, NextPage } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
  title: "About Us - Restaurant",
  description: "Learn more about our restaurant.",
};

const About: NextPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to Our Restaurant! We are dedicated to serving delicious food made with fresh ingredients. Our chefs are passionate about creating unique dishes that delight your taste buds. Join us for an unforgettable dining experience!
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Established in 2024, we aim to provide exceptional service and a welcoming atmosphere for all our guests. Whether you are dining with family, friends, or colleagues, we have something for everyone.
          </p>

          {/* Centered Image */}
          <div className="flex justify-center mt-8">
            <Image
              src="/images/logo.png" // Replace with actual image path
              width={800}
              height={800}
              alt="Our Restaurant Interior"
              className="w-72 h-auto rounded-lg shadow-md"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default About;

