import { Link } from "react-router-dom";
import logo from "../../assets/kazimart.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const DashboardNavbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <div className="bg-white shadow-md px-6 flex justify-between items-center">
      <Link to="/">
        <img className="w-24 h-24" src={logo} alt="Kazimart Logo" />
      </Link>
      <div className="relative">
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt={user.displayName} src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user.displayName}</a>
              </li>
              <li>
                <a className="justify-between">{user.email}</a>
              </li>
              <li>
                <button onClick={handleLogOut} className="text-left w-full">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
