import About from "../../components/About/About";
import MainBanner from "../../components/Banners/MainBanner";
import PromoBanner from "../../components/Banners/PromoBanner";
import CallToAction from "../../components/CallToAction/CallToAction";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <PromoBanner />
      <Categories />
      <About />
      <CallToAction />
    </div>
  );
};

export default Home;
