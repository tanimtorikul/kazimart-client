import { Helmet } from "react-helmet-async";
import MainBanner from "../../components/Banners/MainBanner";
import PromoBanner from "../../components/Banners/PromoBanner";
import Brands from "../../components/Brands/Brands";
import CallToAction from "../../components/CallToAction/CallToAction";
import Categories from "../../components/Categories/Categories";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import NewArrivals from "../../components/NewArrivals/NewArrivals";

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
      <NewArrivals/>
      <Brands/>
      {/* <CallToAction /> */}
    </div>
  );
};

export default Home;
