import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Restaurant</title>
        <meta name="description" content="Learn more about our restaurant." />
      </Head>
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <main className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-5">About Us</h1>
          <p className="">
            Welcome to Our Restaurant! We are dedicated to serving delicious
            food made with fresh ingredients. Our chefs are passionate about
            creating unique dishes that delight your taste buds. Join us for
            an unforgettable dining experience!
          </p>
          <p className="mt-4">
            Established in 2024, we aim to provide exceptional service and a
            welcoming atmosphere for all our guests. Whether you are dining
            with family, friends, or colleagues, we have something for
            everyone.
          </p>
        </main>
      </div>
    </>
  );
};

export default About;
