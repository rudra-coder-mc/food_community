import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Restaurant</title>
        <meta name="description" content="Get in touch with our restaurant." />
      </Head>
      <div className="min-h-screen   flex flex-col justify-center">
        <main className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold text-center mb-5">Contact Us</h1>
          <p className=" text-center mb-6">
            We would love to hear from you! Please fill out the form below or contact us via the details provided.
          </p>
          <form className="mt-5 max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                aria-label="Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                aria-label="Email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                aria-label="Message"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary text-white py-2 px-4 rounded hover:bg-green-600 transition duration-150"
            >
              Send Message
            </button>
            {/* Optional: Add feedback message here */}
            {/* <p className="mt-4 text-green-500">Thank you for your message!</p> */}
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;

