import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <title>404 Not Found | Kazimart</title>

      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="mt-3 font-semibold text-gray-800 text-lg md:text-xl">
            Oops! Something Unexpected Occurred.
          </h1>
          <p className="mt-4 text-gray-500 text-[12px] md:text-lg">
            Don&apos;t worry, I am working on it. <br /> Meanwhile, explore these
            links:
          </p>

          <div className="flex items-center justify-center w-full mt-6 gap-x-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              <span>Go back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-white transition-colors duration-200 bg-primary-light border rounded-lg gap-x-2 sm:w-auto hover:bg-green-600"
            >
              <span>Go to homepage</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
