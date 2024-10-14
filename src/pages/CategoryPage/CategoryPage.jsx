import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products] = useProducts();

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.category.includes(categoryName.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [categoryName, products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-[#01684B] my-2 py-6 rounded-xl text-white">
        <h2 className="capitalize text-2xl font-bold text-center">
          {categoryName}
        </h2>
        <p className="my-4 text-center">
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
