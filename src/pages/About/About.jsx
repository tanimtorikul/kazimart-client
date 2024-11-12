import { useEffect } from "react";
import ceoImg from "../../assets/ceo.jpg";

const About = () => {
   
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="max-w-[1400px] mx-auto py-4 lg:py-12 px-4">
      <div className="space-y-5 text-center">
        <h3 className="text-lg md:text-xl font-nsw font-semibold text-[#3AA753]">
          About Kazimart
        </h3>
        <h2 className="text-xl md:text-4xl font-nsw font-semibold text-gray-900">
          Your Trusted E-commerce Partner.
        </h2>
        <p className="text-sm max-w-[800px] mx-auto">
          At Kazimart, we aim to redefine the online shopping experience by
          providing a wide selection of high-quality products at affordable
          prices. Our mission is to bring you the convenience of a diverse
          catalog, with everything from essential goods to the latest trends. We
          are dedicated to customer satisfaction and support sustainable
          practices wherever possible. Under the leadership of CEO Kazi
          Mustafiz, Kazimart is committed to making your shopping experience
          seamless, enjoyable, and secure. Join us as we innovate and enhance
          your journey in the world of e-commerce.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-40 rounded-full"
            src={ceoImg}
            alt="CEO Kazi Mustafiz"
          />
          <div className="space-y-1 text-center">
            <h3 className="font-semibold text-lg">Kazi Mustafiz</h3>
            <h5 className="text-[#3AA753]">CEO & Founder</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
