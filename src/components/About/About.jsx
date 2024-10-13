import about from "../../assets/about.png";
import ceoImg from "../../assets/ceo.jpg";
const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-4">
        <div className="col-span-1">
          <img src={about} alt="" />
        </div>
        <div className="col-span-1 space-y-5">
          <h3 className="text-lg md:text-xl font-nsw font-semibold text-[#3AA753]">
            About Kazimart
          </h3>
          <h2 className="text-3xl md:text-4xl font-nsw font-semibold text-gray-900 ">
            Organic and Healthy Foods Provider.
          </h2>
          <p className="text-sm">
            Kazimart is committed to transforming how you experience organic and
            healthy foods. Our mission is to provide high-quality, sustainably
            sourced products that empower health-conscious consumers. We believe
            good health begins with what we eat, and our carefully selected
            organic fruits, vegetables, and grains support local farmers and
            sustainable practices. Under the leadership of CEO Kazi Mustafiz, we
            strive to inspire healthier lifestyles. Remember, at Kazimart, we
            say: Think Smart to Live Simple. Join us on our journey to a
            healthier, happier world—one meal at a time.
          </p>

          <div className="">
            <div className="flex items-center gap-4">
              <div className="">
                <img className="w-40 rounded-full" src={ceoImg} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg ">Kazi Mustafiz</h3>
                <h5 className="text-[#3aa753]">CEO & Founder</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
