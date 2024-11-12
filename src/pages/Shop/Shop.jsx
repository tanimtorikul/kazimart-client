import { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";
import Spinner from "../../utlis/Spinner";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeIn } from "../../utlis/animationVariants";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");

  const { products, productsCount, isLoading } = useProducts(
    currentPage,
    itemsPerPage,
    asc,
    search
  );

  const numberOfPages =
    productsCount > 0 ? Math.ceil(productsCount / itemsPerPage) : 0;
  const pages = [...Array(numberOfPages).keys()];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log(searchText);
  };

  return (
    <div className="px-0 md:px-8 xl:px-0 py-16 min-h-screen">
      <Helmet>
        <title>Shop</title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {/* Searching */}
          <div className="max-w-[1400px] mx-auto mb-6 flex justify-center">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                name="search"
                type="search"
                placeholder="Search products..."
                className="rounded-l-lg px-4 py-2 border"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-light text-white rounded-r-lg hover:bg-[#014C36]"
              >
                Search
              </button>
            </form>
          </div>

          {/* Sorting */}
          <div className="max-w-[1400px] mx-auto mb-4 flex justify-end items-center">
            <span className="text-primary-light">Sort by:</span>
            <select
              value={asc ? "asc" : "desc"}
              onChange={(e) => setAsc(e.target.value === "asc")}
              className="py-2 text-primary-light rounded-md border-none outline-none"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {products.length > 0 ? (
              products.map((item) => <ProductCard key={item.id} item={item} />)
            ) : (
              <p className="col-span-2 md:col-span-5 font-semibold text-lg text-center text-gray-500">
                No products found
              </p>
            )}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="inline-flex space-x-1">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 border rounded ${
                    currentPage === page
                      ? "bg-primary-light text-white"
                      : "bg-white text-primary-light hover:bg-primary-light hover:text-white"
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
