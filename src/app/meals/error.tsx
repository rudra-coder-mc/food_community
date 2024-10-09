'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 p-6">
      <div className="card bg-red-100 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-red-600">An Error Occurred!</h1>
        <p className="mt-4 text-gray-700">
          Failed to fetch meal data. Please try again later.
        </p>
        {error && (
          <p className="mt-2 text-red-500 font-semibold">
            Error details: {error.message}
          </p>
        )}
        <button
          className="btn btn-primary mt-6"
          onClick={reset} // Call reset to retry fetching data
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

