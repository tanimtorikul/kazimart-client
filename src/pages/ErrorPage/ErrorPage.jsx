
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
        <title>404 Not Found | Kazimart</title>
    
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Oops! Something Unexpected Occurred.
          </h1>
          <p className="mt-4 text-gray-500">
            Don&apos;t worry, I am working on it. Meanwhile, explore these
            links:
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              <span>Go back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-white transition-colors duration-200 bg-green-500 border rounded-lg gap-x-2 sm:w-auto hover:bg-green-600"
            >
              <span>Take Me to the Homepage</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;