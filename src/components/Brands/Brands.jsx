import SectionTitle from "../shared/SectionTitle";
import Marquee from "react-fast-marquee";
import brand1 from "../../assets/godrej.png";
import brand2 from "../../assets/marico.png";
import brand3 from "../../assets/nestle.png";
import brand4 from "../../assets/pran.png";
import brand5 from "../../assets/recktitt.png";
import brand6 from "../../assets/uniliver.png";

const Brands = () => {
  return (
    <div className="max-w-5xl mx-auto my-12">
      <SectionTitle heading="Popular Brands in Kazirmart" />
      <div className="mt-6">
        <Marquee speed={50} className="flex items-center">
          <img src={brand1} alt="Godrej" className="brand-logo mx-4 md:w-24" />
          <img src={brand2} alt="Marico" className="brand-logo mx-4 md:w-24" />
          <img src={brand3} alt="Nestle" className="brand-logo mx-4 md:w-24" />
          <img src={brand4} alt="Pran" className="brand-logo mx-4 md:w-24" />
          <img src={brand5} alt="Reckitt" className="brand-logo mx-4 md:w-24" />
          <img src={brand6} alt="Unilever" className="brand-logo mx-4 md:w-24" />
          <img src={brand2} alt="Unilever" className="brand-logo mx-4 md:w-24" />
          <img src={brand4} alt="Unilever" className="brand-logo mx-4 md:w-24" />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
