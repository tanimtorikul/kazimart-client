import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/shopping-bag.png";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully!");
        navigate(location?.state ? location.state : "/");
        console.log(user);
      })
      .catch((error) => {
        toast.error("Login failed. " + error.message);
        console.error(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[600px] lg:min-h-screen items-center">
      <div className="flex flex-col md:max-w-md w-full rounded-md p-6 bg-white shadow-lg text-gray-900">
        <div className="flex items-center justify-center space-x-1 ml-2 lg:ml-0 p-4">
          <img className="w-6 md:w-10" alt="" src={logo} />

          <h2 className="text-lg md:text-xl font-semibold">Kazimart</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Email is required</span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name="password"
              placeholder="*******"
              className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
              required
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-xs">Password is required</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary-light w-full rounded-md py-2 text-white"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-2 text-sm text-gray-400">Or Continue With</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <SocialLogin />
        <p className="py-2 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-green-600 text-primary-light"
          >
            Sign Up
          </Link>
        </p>
        {/* <div className="text-center text-xs text-gray-600 mb-2">
          <p>Use the following credentials to log in as an admin:</p>
          <p className="font-semibold">Email: admin@kazimart1.com</p>
          <p className="font-semibold">Password: K@zimart1</p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
