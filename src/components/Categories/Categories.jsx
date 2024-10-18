import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import useCategories from "../../hooks/useCategories";

const Categories = () => {
  const { categories } = useCategories(); 

  return (
    <div className="my-16">
      <SectionTitle
        heading="Categories"
        subHeading="Discover the Trends and Favorites"
      />

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {categories.map((category) => ( 
          <Link key={category._id} to={`/categories/${category.name}`}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
