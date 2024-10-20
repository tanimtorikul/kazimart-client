import { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);
  const [asc, setAsc] = useState(true); 

  const { products, productsCount } = useProducts(currentPage, itemsPerPage, asc);

  const numberOfPages = Math.ceil(productsCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      {/* Sorting Dropdown */}
      <div className="max-w-[1400px] mx-auto mb-4 flex justify-end">
        <select
          value={asc ? "asc" : "desc"}
          onChange={(e) => setAsc(e.target.value === "asc")}
          className="px-4 py-2 border border-[#01684B] text-[#01684B] rounded-md"
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="inline-flex space-x-1">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                currentPage === page
                  ? "bg-[#01684B] text-white"
                  : "bg-white text-[#01684B] hover:bg-[#01684B] hover:text-white"
              }`}
            >
              {page + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Shop;
