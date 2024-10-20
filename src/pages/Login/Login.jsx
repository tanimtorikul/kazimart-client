import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/kazimart.png";
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
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      toast.success("Logged in successfully!");
      navigate(location?.state ? location.state : "/");
      console.log(user);
    });
    console.log(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center min-h-[100px] md:min-h-[700px] items-center py-4 md:py-0">
      <div className="flex flex-col md:max-w-2xl rounded-md py-2 px-10 bg-white shadow-2xl text-gray-900">
        <div className="mb-2 text-center">
          <img src={logo} alt="Kazimart Logo" className="w-48 h-auto mx-auto" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="block mb-2 text-lg">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-4 py-3 border rounded-md border-gray-300  text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-lg mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                autoComplete="new-password"
                required
                placeholder="*******"
                className="w-full px-4 py-3 border rounded-md border-gray-300  text-gray-900"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#01684B] w-full rounded-md py-2 text-white md:text-lg"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
          <p className="px-4 md:text-lg text-gray-400">Or Continue With</p>
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
        </div>
        <SocialLogin />
        <p className="px-8 py-2 md:text-lg text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-green-600 text-[#01684B] underline"
          >
            Sign Up
          </Link>
          <div className="mb-4 text-center p-4">
            <p className="text-gray-600">
              Use the following credentials to log in as a admin:
            </p>
            <div className="mt-2">
              <p className="font-semibold">Email: admin@kazimart.com</p>
              <p className="font-semibold">Password: K@zimart1234</p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Login;
