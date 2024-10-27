import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import useCategories from "../../hooks/useCategories";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination, FreeMode } from "swiper/modules"; 

const Categories = () => {
  const { categories } = useCategories();

  return (
    <div className="my-16">
      <SectionTitle
        heading="Categories"
        subHeading="Discover the Trends and Favorites"
      />

      <div className="max-w-[1400px] mx-auto mt-6">
        {/* Grid layout for small screens */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {categories.map((category) => (
            <Link to={`/categories/${category.category}`} key={category._id}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={5} 
            spaceBetween={30}
            pagination={{ clickable: true }}
            freeMode={true} 
            modules={[Pagination, FreeMode]} 
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category._id}>
                <Link to={`/categories/${category.category}`}>
                  <CategoryCard category={category} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;
