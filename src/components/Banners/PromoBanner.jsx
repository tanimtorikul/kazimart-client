import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function PromoBanner() {
  const [banners, setBanners] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axiosPublic.get("/promo");
        setBanners(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanners();
  }, [axiosPublic]);

  return (
    <div className="max-w-[1400px] mx-auto">
      <Swiper
        speed={1000}
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
        {banners.map((banner, id) => (
          <SwiperSlide key={id}>
            <div className="md:h-[200px] my-4 md:my-0">
              <img
                className="object-contain w-full h-full"
                src={banner.imgUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PromoBanner;
