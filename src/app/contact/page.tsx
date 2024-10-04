import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Restaurant</title>
        <meta name="description" content="Get in touch with our restaurant." />
      </Head>
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <main className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
          <p className="text-gray-700">
            We would love to hear from you! Please fill out the form below or
            contact us via the details provided.
          </p>
          <form className="mt-5">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
