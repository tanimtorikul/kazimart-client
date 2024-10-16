import logo from "../../assets/kazimart.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

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
    <ul className="flex items-center space-x-4">
      <li>
        <NavLink
          exact
          to="/"
          style={({ isActive, isPending }) => ({
            fontWeight: isActive ? "bold" : "",
            borderBottom: isActive ? "2px solid green" : "",
            color: isPending ? "red" : "#103178",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          style={({ isActive, isPending }) => ({
            fontWeight: isActive ? "bold" : "",
            borderBottom: isActive ? "2px solid green" : "",
            color: isPending ? "red" : "#103178",
          })}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          style={({ isActive, isPending }) => ({
            fontWeight: isActive ? "bold" : "",
            borderBottom: isActive ? "2px solid green" : "",
            color: isPending ? "red" : "#103178",
          })}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive, isPending }) => ({
            fontWeight: isActive ? "bold" : "",
            borderBottom: isActive ? "2px solid green" : "",
            color: isPending ? "red" : "#103178",
          })}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => ({
            fontWeight: isActive ? "bold" : "",
            borderBottom: isActive ? "2px solid green" : "",
            color: isPending ? "red" : "#103178",
          })}
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-white fixed z-10 w-full lg:px-24">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button className="btn btn-ghost" aria-haspopup="true">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
        <Link to="/" className="flex justify-center space-x-3 lg:justify-start">
          <img className="w-32" alt="" src={logo} />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-lg">{navlinks}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <Link to="/cart">
            <div className="indicator flex items-center gap-1 text-lg text-[#01684B] relative">
              {cart.length > 0 && (
                <span className="indicator-item badge text-white bg-[#01684b] text-xs w-5 h-5 flex items-center justify-center -top-1 -right-1 rounded-full shadow-lg">
                  {cart.length}
                </span>
              )}
              <FiShoppingCart className="text-2xl" />
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
              <div className="flex items-center gap-1 text-lg text-[#01684B]">
                <FaRegUser />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
