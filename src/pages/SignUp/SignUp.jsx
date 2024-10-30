import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Login/SocialLogin";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/kazimart.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              toast.success("User Created Successfully!");
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="flex flex-col justify-center min-h-[600px] items-center py-4">
      <div className="flex flex-col md:max-w-2xl rounded-md py-2 px-10 bg-white shadow-2xl text-gray-900">
        <div className="mb-2 text-center">
          <img
            src={logo}
            alt="Kazimart Logo"
            className="w-24 h-auto mx-auto"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-lg">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              required
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-lg">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              required
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-lg">
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
              className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              required
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#01684B] w-full rounded-md py-2 text-white md:text-lg"
            >
              Sign Up
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-indigo-600 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
