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
      className="w-full"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner._id} className="flex flex-col">
          <div
            className="relative w-full h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${banner.imgUrl})`,
            }}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 text-white z-10">
              <h1 className="mb-4 text-3xl md:text-5xl font-bold drop-shadow-lg">
                {banner.title}
              </h1>
              <p className="mb-6 text-lg md:text-xl drop-shadow-md">
                {banner.description}
              </p>
              <Link
                to={banner.productId ? `/product/${banner.productId}` : "/shop"}
                className="bg-primary-light hover:bg-primary-dark text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainBanner;
