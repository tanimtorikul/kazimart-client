import { Helmet } from "react-helmet-async";
import About from "../../components/About/About";
import MainBanner from "../../components/Banners/MainBanner";
import PromoBanner from "../../components/Banners/PromoBanner";
import Brands from "../../components/Brands/Brands";
import CallToAction from "../../components/CallToAction/CallToAction";
import Categories from "../../components/Categories/Categories";
import PopularProducts from "../../components/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Kazimart</title>
      </Helmet>
      <MainBanner />
      <PromoBanner />
      <Categories />
      <PopularProducts/>
      <Brands/>
      <About />
      <CallToAction />
    </div>
  );
};

export default Home;
