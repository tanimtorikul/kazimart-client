import ProductCard from "../../components/shared/ProductCard";
import useProducts from "../../hooks/useProducts";
import { useEffect, useState } from "react";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0); 
  const [itemsPerPage, setItemsPerPage] = useState(10); 

  // Fetch products and product count with pagination
  const { products, productsCount } = useProducts(currentPage, itemsPerPage); 

  const numberOfPages = Math.ceil(productsCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-[#01684B] my-2 py-6 text-white">
        <h2 className="capitalize text-2xl font-bold text-center">Shop</h2>
        <p className="my-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officia sapiente nostrum magni reprehenderit, modi eius consequuntur
          neque aperiam eos!
        </p>
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
