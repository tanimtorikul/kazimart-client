import logo from "../../assets/kazimart.png";
import nagad from "../../assets/nagad.svg";
import bkash from "../../assets/bkash.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";

const Footer = () => {
  return (
    <footer className="md:mt-10">
      <div className="container px-6 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mb-8 sm:mb-0">
            <a href="#">
              <img className="w-40 py-1 px-4" alt="Kazimart logo" src={logo} />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 text-gray-700">
            <div>
              <p className="font-semibold">Quick Links</p>
              <div className="flex flex-col mt-4 space-y-2">
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Careers
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold">Products</p>
              <div className="flex flex-col mt-4 space-y-2">
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Groceries
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Electronics
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Fashion
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold">Support</p>
              <div className="flex flex-col mt-4 space-y-2">
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Shipping & Delivery
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  Returns & Refunds
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold">Contact Us</p>
              <div className="flex flex-col mt-4 space-y-2">
                <a
                  href="tel:+8801234567890"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  +8801720082585
                </a>
                <a
                  href="mailto:kazimart@gmail.com"
                  className="text-sm transition-colors duration-200 hover:text-green-600"
                >
                  kazimart@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:justify-start mt-10 space-x-2">
          <p className="font-semibold text-gray-700">We Accept:</p>
          <img className="h-10" src={nagad} alt="" />
          <img className="h-10" src={bkash} alt="" />
          <img className="h-6" src={mastercard} alt="" />
          <img className="h-4" src={visa} alt="" />
        </div>

        <div className="flex flex-col items-center justify-between mt-10 border-t border-gray-200 pt-6 space-y-6 sm:flex-row sm:space-y-0">
          <p className="text-sm text-gray-500 md:text-left text-center">
            Developed with ❤️ by Tanim. <br /> <span>© 2024 Kazimart.  All Rights Reserved.</span>
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100068244396678"
              className="hover:text-green-600"
            >
              <img className="w-6 h-6" src={facebook} alt="" />
            </a>
            <a href="#" className="hover:text-green-600">
              <img className="w-6 h-6" src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
