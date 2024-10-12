import logo from "../../assets/kazimart.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navlinks = (
    <ul className="flex items-center space-x-4">
      <li>
        <NavLink
          exact
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderBottom: isActive ? "2px solid green" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-white shadow-2xl  px-8">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button
            className="btn btn-ghost p-2 hover:bg-gray-100 rounded-md"
            aria-haspopup="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        <Link to="/">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            alt="Logo"
            src={logo}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-4 space-x-6 text-lg font-medium text-gray-700 hover:text-[#FF9923] transition-colors duration-200">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-6 text-[22px] text-[#FF9923]">
          <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors duration-200" />
          <FiShoppingCart className="cursor-pointer hover:text-green-500 transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
