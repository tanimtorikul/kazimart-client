import logo from "../../assets/shopping-bag.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";
import WelcomeBanner from "../Banners/WelcomeBanner";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const navlinks = (
    <ul className="flex flex-col md:flex-row md:items-center md:space-x-4">
      <li>
        <NavLink
          exact
          to="/"
          className={({ isActive, isPending }) =>
            `text-${isActive ? "primary-light" : "#ffffff"} ${
              isPending ? "text-red-500" : ""
            } font-${isActive ? "bold" : "normal"} ${
              isActive ? "border-b-2 border-primary-light" : ""
            } ${isActive ? "bg-white" : "bg-transparent"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            `text-${isActive ? "primary-light" : "#ffffff"} ${
              isPending ? "text-red-500" : ""
            } font-${isActive ? "bold" : "normal"} ${
              isActive ? "border-b-2 border-primary-light" : ""
            } ${isActive ? "bg-white" : "bg-transparent"}`
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            `text-${isActive ? "primary-light" : "#ffffff"} ${
              isPending ? "text-red-500" : ""
            } font-${isActive ? "bold" : "normal"} ${
              isActive ? "border-b-2 border-primary-light" : ""
            } ${isActive ? "bg-white" : "bg-transparent"}`
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            `text-${isActive ? "primary-light" : "#ffffff"} ${
              isPending ? "text-red-500" : ""
            } font-${isActive ? "bold" : "normal"} ${
              isActive ? "border-b-2 border-primary-light" : ""
            } ${isActive ? "bg-white" : "bg-transparent"}`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            `text-${isActive ? "primary-light" : "#ffffff"} ${
              isPending ? "text-red-500" : ""
            } font-${isActive ? "bold" : "normal"} ${
              isActive ? "border-b-2 border-primary-light" : ""
            } ${isActive ? "bg-white" : "bg-transparent"}`
          }
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="sticky top-0 z-10 w-full">
      <WelcomeBanner />
      <div className="navbar bg-white md:px-36 md:py-3">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt- w-32 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center space-x-1 md:pace-x-2 lg:justify-start ml-2 lg:ml-0"
          >
            <img className="w-6 md:w-12" alt="" src={logo} />

            <h2 className="text-lg md:text-xl font-semibold">Kazimart</h2>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-lg">{navlinks}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-6">
            {/* Cart Icon */}
            <Link to="/cart">
              <div className="indicator flex items-center gap-1 text-lg text-primary-light relative">
                {cart.length > 0 && (
                  <span className="indicator-item badge text-white bg-primary-light text-xs w-5 h-5 flex items-center justify-center -top-1 -right-1 rounded-full shadow-lg">
                    {cart.length}
                  </span>
                )}
                <FiShoppingCart className="text-xl md:text-2xl" />
              </div>
            </Link>

            {/* User Profile Dropdown */}
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt={user.email} src={user.photoURL} />
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
                    <Link to="/dashboard/overview">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="text-lg">
                <div className="flex items-center gap-1 text-lg text-primary-light">
                  <FaRegUser />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
