import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import usePromos from "../../hooks/usePromo";

function PromoBanner() {
  const { promos } = usePromos(); 

  return (
    <div className="max-w-[1400px] mx-auto">
      <Swiper
        speed={1200}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {promos.map((promo, id) => (
          <SwiperSlide key={id}>
            <div className="md:h-[200px] my-4 md:my-0">
              <img
                className="object-contain w-full h-full"
                src={promo.imgUrl}
                alt={promo.title || "Promo Image"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PromoBanner;
