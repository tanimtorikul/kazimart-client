import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      toast.success("Logged in successfully!");
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div className="mt-4">
      <button
        type="submit"
        className="bg-[#4285F4] w-full rounded-md py-2 text-white md:text-lg flex items-center justify-center space-x-2"
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
