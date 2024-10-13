import About from "../../components/About/About";
import MainBanner from "../../components/Banners/MainBanner";
import PromoBanner from "../../components/Banners/PromoBanner";
import CallToAction from "../../components/CallToAction/CallToAction";


const Home = () => {
    return (
        <div>
          <MainBanner/>
          <PromoBanner/>
            <About/>
            <CallToAction/>
        </div>
    );
};

export default Home;