import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // fetching categories data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("categories.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="my-8">
      <SectionTitle
        heading="Categories"
        subHeading="Discover the Trends and Favorites"
      />

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.category}`}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
