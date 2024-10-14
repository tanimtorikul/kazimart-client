import logo from "../../assets/kazimart.png";
const Footer = () => {
  return (
    <footer className="border-y md:mt-10">
      <div className="container px-6 py-12 mx-auto max-w-7xl">
        <a className="" href="#">
          <img className="w-48 py-1 px-4" alt="" src={logo} />
        </a>

        <div className="grid grid-cols-1 gap-6 my-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-800">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Careers
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Products</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Groceries
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Electronics
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Fashion
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Support</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Shipping & Delivery
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                Returns & Refunds
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Contact Us</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                +880 123 456 7890
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm md:text-base transition-colors duration-300 hover:underline hover:text-[#3aa753]"
              >
                support@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row">
          <p className="mt-4 md:text-xl  text-gray-500 sm:mt-0">
            Developed with ❤️ by Tanim. © 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
