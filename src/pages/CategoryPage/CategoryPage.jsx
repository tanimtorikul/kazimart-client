import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";
import cartImg from "../../assets/emptycart.png";
import useCategories from "../../hooks/useCategories";

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { allProducts } = useProducts();
  const { categories } = useCategories();

  // Get the current category object
  const currentCategory = categories?.find(
    (cat) => cat.category?.toLowerCase() === category?.toLowerCase()
  );

  const bannerImgUrl = currentCategory ? currentCategory.bannerImgUrl : "";

  // Filter products based on category name
  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.category[0]?.toLowerCase().includes(category?.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [category, allProducts]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto min-h-screen">
      {/* Banner Image */}
      {bannerImgUrl && (
        <div className="relative h-full md:h-60 lg:h-full">
          <img
            src={bannerImgUrl}
            alt={`${category} Banner`}
            className="w-full object-cover rounded-lg shadow-lg"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] md:text-xl lg:text-2xl font-semibold text-center text-white bg-opacity-90 bg-primary-light px-6 py-3 rounded-lg">
            Products in {category}
          </h2>
        </div>
      )}

      {/* Product Cards */}
      <div className="mt-8">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                  className="w-16 md:w-28 mx-auto my-4"
                />
                <h2 className="text-sm md:text-xl text-center">
                  Currently no products in {category}
                </h2>
                <h2 className="text-xl mt-2">
                  <Link
                    to="/shop"
                    className="bg-primary-light text-white px-6 py-2 rounded-xl text-sm"
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
