import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import useBanners from "../../hooks/useBanners";

const MainBanner = () => {
  const { banners } = useBanners();

  return (
    <Swiper
      speed={1000}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner._id} className="w-full flex flex-col gap-4">
          <div
            className="hero mx-auto md:h-[500px] relative"
            style={{
              backgroundImage: `url(${banner.imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat:'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="hero-content text-neutral-content text-center relative z-10">
              <div className="max-w-3xl">
                <h1 className="mb-8 text-3xl md:text-5xl font-extrabold text-white shadow-lg">
                  {banner.title}
                </h1>
                <p className="mb-5 text-lg md:text-xl text-white shadow-md">
                  {banner.description}
                </p>
                <Link
                  to="/shop"
                  className="btn text-lg  rounded-full shadow-md transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainBanner;
