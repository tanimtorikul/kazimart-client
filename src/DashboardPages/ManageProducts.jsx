import useProducts from "../hooks/useProducts";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa"; 
import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { products, productsCount, refetch } = useProducts(
    currentPage,
    itemsPerPage
  );

  const numberOfPages = Math.ceil(productsCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="overflow-x-auto py-4">
      <h2 className="text-2xl">Product List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-[#F2FCFD]">
          <tr>
            <th className="py-3 px-5 text-center">SL</th>
            <th className="py-3 px-5 text-center">Image</th>
            <th className="py-3 px-5 text-center">Product Name</th>
            <th className="py-3 px-5 text-center">Category</th>
            <th className="py-3 px-5 text-center">Selling Price</th>
            <th className="py-3 px-5 text-center">Previous Price</th>
            <th className="py-3 px-5 text-center">Quantity</th>
            <th className="py-3 px-5 text-center">In Stock</th>
            <th className="py-3 px-5 hidden sm:table-cell text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={product._id}>
              <td className="py-3 px-5 text-center">
                {index + 1 + currentPage * itemsPerPage}
              </td>
              <td className="py-3 px-5 flex justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-cover"
                />
              </td>
              <td className="py-3 px-5 text-center">{product.name}</td>
              <td className="py-3 px-5 text-center">
                {product.category.join(", ")}
              </td>
              <td className="py-3 px-5 text-center">{product.price}</td>
              <td className="py-3 px-5 text-center">{product.previousPrice}</td>
              <td className="py-3 px-5 text-center">{product.quantity}</td>
              <td className="py-3 px-5 text-center">
                {product.inStock ? "Yes" : "No"}
              </td>
              <td className="py-3 px-5 text-center">
                <button className="border-blue-500 text-blue-500 border px-1 py-1 rounded md:ml-3">
                  <MdEdit />
                </button>
                <button className="border-red-500 text-red-500 border px-1 py-1 rounded md:ml-3">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
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

export default ManageProducts;
