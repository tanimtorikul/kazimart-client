import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const MainBanner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("mainbanners.json");
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <Swiper
      speed={1000}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      settings
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {banners.map((banner, id) => (
        <SwiperSlide
          key={id}
          className="w-full flex flex-col gap-4 pt-4 md:pt-8"
        >
          <div
            className="hero h-[400px] relative"
            style={{
              backgroundImage: `url(${banner.imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="hero-content text-neutral-content text-center relative z-10">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-extrabold text-white shadow-lg">
                  {banner.title}
                </h1>
                <p className="mb-5 text-lg md:text-xl text-white shadow-md">
                  {banner.subtitle}
                </p>
                <button className="btn text-lg rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainBanner;
