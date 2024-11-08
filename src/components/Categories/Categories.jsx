import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import useCategories from "../../hooks/useCategories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import "./Categories.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Categories = () => {
  const { categories } = useCategories();

  return (
    <div className="md:my-12">
      <SectionTitle
        heading="Categories"
        subHeading="Discover the Trends and Favorites"
      />

      <div className="max-w-[1400px] mx-auto mt-6 relative">
        {/* Grid layout for small screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:hidden">
          {categories.map((category) => (
            <Link to={`/categories/${category.category}`} key={category._id}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>

        {/* Swiper for large screens */}
        <div className="hidden md:hidden lg:block relative">
          <Swiper
            modules={[Navigation, FreeMode]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category._id}>
                <Link to={`/categories/${category.category}`}>
                  <CategoryCard category={category} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-custom">
            <FaChevronLeft size={40} />
          </div>
          <div className="swiper-button-next-custom">
            <FaChevronRight size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
