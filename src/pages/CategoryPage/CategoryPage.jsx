import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { allProducts } = useProducts();

  // filter the specific category based on category name
  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.category[0]?.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [category, allProducts]);

  // to go to top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-[#01684B] my-2 py-6 rounded-xl text-white">
        <h2 className="capitalize text-2xl font-bold text-center">
          {/* category name */}
          {category}
        </h2>
        <p className="my-4 text-center">
          {/* dummy text */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officia sapiente nostrum magni reprehenderit, modi eius consequuntur
          neque aperiam eos!
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {filteredProducts?.map((product) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
