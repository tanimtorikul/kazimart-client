import Marquee from "react-fast-marquee";

const WelcomeBanner = () => {
  return (
    <div className="bg-primary-light text-white py-2 px-4">
      <div className="flex flex-wrap justify-between items-center">
        {/* welcome msg marquee */}
        <div className="text-sm font-medium w-full lg:w-2/3">
          <Marquee speed={80}>
            <p className="mr-4">
              Welcome to Kazimart,
              <span className="font-bold"> Think smart to live simple</span>
            </p>
          </Marquee>
        </div>

        {/* right side email and mobile no , hidden in sm device */}
        <div className="text-sm hidden sm:flex sm:space-x-4">
          <span>
            <a href="mailto:admin@kazimart.com">admin@kazimart.com</a>
          </span>
          <span>
            <a href="tel:+8801979094748">+8801979094748</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
