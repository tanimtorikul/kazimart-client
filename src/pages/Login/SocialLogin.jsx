import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result.user);
      
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      
      const res = await axiosPublic.post("/users", userInfo);
      console.log(res.data);

      toast.success("Logged in successfully!");
      navigate(state?.from || "/"); // Set a specific fallback if needed
    } catch (error) {
      console.error("Google Sign-In error:", error);
      toast.error("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        className="bg-[#265bb1] w-full rounded-md py-2 text-white md:text-lg flex items-center justify-center space-x-2"
        onClick={handleGoogleSignIn}
      >
        <div className="bg-white rounded-full p-1">
          <FcGoogle size={24} />
        </div>
        <span>Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
