import logo from "../../assets/shopping-bag.png";
import nagad from "../../assets/nagad.svg";
import bkash from "../../assets/bkash.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F8]">
      <footer className="flex flex-col md:flex-row justify-between  max-w-[1400px] mx-auto px-4 py-8 border-b-2">
        <div className="flex flex-col items-start space-y-4 mb-8 md:mb-0">
          <Link
            to="/"
            className="flex items-center justify-center space-x-1 md:pace-x-2 lg:justify-start"
          >
            <img className="w-8 md:w-10" alt="" src={logo} />

            <h2 className="text-xl font-semibold">Kazimart</h2>
          </Link>

          <p>Kalatiya, Keranigonj,</p>
          <p>Dhaka, 1313</p>
          <p>
            Email:{" "}
            <a href="mailto:kazimart786@gmail.com" className="hover:underline">
              kazimart786@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="#" className="hover:underline">
              01720082585
            </a>
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100068244396678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <nav className="space-y-2 flex flex-col">
          <h6 className="text-xl font-semibold">Help</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Returns + Exchanges</a>
          <a className="link link-hover">Shipping</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">FAQs</a>
        </nav>

        <nav className="space-y-2 flex flex-col">
          <h6 className="text-xl font-semibold">About Us</h6>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Visit Our Store</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">About Us</a>
        </nav>

        <nav className="space-y-2 flex flex-col">
          <h6 className="text-xl font-semibold">Signup for email</h6>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email..."
              className="border p-4 flex-grow rounded-l"
            />
            <button className="bg-black text-white p-2 rounded-r">
              Subscribe
            </button>
          </div>
        </nav>
      </footer>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto px-4 py-4 text-sm text-gray-600">
        <p>© 2024 Kazimart. All Rights Reserved.</p>
        <p>
          Developed by Tanim with{" "}
          <span className="text-red-500 text-xl">♥</span> | © Kazimart
        </p>

        <div className="flex items-center space-x-4">
          <img src={nagad} alt="Nagad" className="w-12 h-12" />
          <img src={bkash} alt="Bkash" className="w-12 h-12" />
          <img src={mastercard} alt="Mastercard" className="w-8 h-8" />
          <img src={visa} alt="Visa" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
