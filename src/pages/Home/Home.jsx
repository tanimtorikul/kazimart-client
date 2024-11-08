import { Helmet } from "react-helmet-async";
import MainBanner from "../../components/Banners/MainBanner";
import PromoBanner from "../../components/Banners/PromoBanner";
import CallToAction from "../../components/CallToAction/CallToAction";
import Categories from "../../components/Categories/Categories";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Stats from "../../components/Stats/Stats";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Helmet>
        <title>Kazimart</title>
      </Helmet>
      <MainBanner />
      <PromoBanner />
      <Categories />
      <PopularProducts />
      <NewArrivals />
      {/* <Brands /> */}
      <CallToAction />
      <Stats />
    </div>
  );
};

export default Home;
