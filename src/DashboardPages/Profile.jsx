import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  console.log("isAdmin", isAdmin);

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome, {isAdmin ? "Admin Saheb" : user.displayName}!
        </h1>

        <div className="flex flex-col items-center mb-4">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
            />
          )}
          <div className="bg-gray-50 rounded-lg p-4 w-full text-center">
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
