import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import useBanners from "../../hooks/useBanners";
import { motion } from "framer-motion";
import { fadeIn } from "../../utlis/animationVariants";
import { useState } from "react";

const MainBanner = () => {
  const { banners } = useBanners();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      speed={1200}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade]}
      className="w-full"
      onSlideChange={handleSlideChange}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={banner._id} className="flex flex-col">
          <div
            className="relative h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${banner.imgUrl})`,
            }}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/100 to-transparent"></div>

            {/* Content with fadeIn animation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 text-white z-10">
              <motion.h1
                className="mb-4 font-bebas text-3xl md:text-5xl tracking-wide drop-shadow-lg"
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate={currentIndex === index ? "show" : "hidden"}
              >
                {banner.title}
              </motion.h1>
              <motion.p
                className="mb-8 text-lg md:text-2xl max-w-2xl leading-relaxed drop-shadow-md"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate={currentIndex === index ? "show" : "hidden"}
              >
                {banner.description}
              </motion.p>
              <Link
                to={banner.productId ? `/product/${banner.productId}` : "/shop"}
                className="bg-[#197747] hover:bg-primary-dark text-white lg:text-lg font-semibold px-4 text-center lg:px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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
