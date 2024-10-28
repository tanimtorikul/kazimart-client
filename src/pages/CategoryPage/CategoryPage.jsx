import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";
import cartImg from "../../assets/emptycart.png";

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { allProducts } = useProducts();

  // Filter the specific category based on category name
  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.category[0]?.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [category, allProducts]);

  // To go to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Product Cards */}
      <div className="max-w-[1400px] mx-auto py-4">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Products in {category}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))
          ) : (
            <div className="flex justify-center items-center col-span-2 md:col-span-5">
              <div className="flex flex-col items-center space-y-8">
                <img
                  src={cartImg}
                  alt="Empty Cart"
                  className="w-24 md:w-48 mx-auto my-4"
                />
                <h2 className="capitalize md:text-2xl text-center">
                  Currently no products in {category}
                </h2>
                <h2 className="text-xl mt-2">
                  <Link
                    to="/shop"
                    className="bg-[#01684B] text-white px-6 py-2 rounded-xl"
                  >
                    Lets Shop Others
                  </Link>
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
