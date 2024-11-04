import { Link } from "react-router-dom";
import logo from "../../assets/shopping-bag.png";
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
      <Link
        to="/"
        className="flex items-center justify-center space-x-1 md:pace-x-2 space-y-2 py-3 lg:justify-start"
      >
        <img className="w-6 md:w-10" alt="" src={logo} />

        <h2 className="text-lg md:text-xl font-semibold">Kazimart</h2>
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
