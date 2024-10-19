import useProducts from "../hooks/useProducts";
import { MdEdit } from "react-icons/md"; // Import your icon library
import { FaTrashAlt } from "react-icons/fa"; // Import your icon library

const ManageProducts = () => {
  const { products, refetch } = useProducts();

  const handleEdit = (id) => {};

  const handleDelete = (id) => {};

  return (
    <div className="overflow-x-auto py-4">
      <h2 className="text-2xl">Product List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-[#F2FCFD]">
          <tr>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              SL
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Product Name
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Category
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Selling Price
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Previous Price
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Quantity
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              In Stock
            </th>
            <th className="py-3 px-5 hidden sm:table-cell text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={product._id}>
              <td className="py-3 px-5 text-center">{index + 1}</td>
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
              </td>{" "}
              <td className="py-3 px-5 text-center">{product.price}</td>
              <td className="py-3 px-5 text-center">{product.previousPrice}</td>
              <td className="py-3 px-5 text-center">{product.quantity}</td>
              <td className="py-3 px-5 text-center">
                {product.inStock ? "Yes" : "No"}
              </td>{" "}
              <td className="py-3 px-5 text-center">
                <button
                  onClick={() => handleEdit(product._id)}
                  className="border-blue-500 text-blue-500 border px-1 py-1 rounded md:ml-3"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="border-red-500 text-red-500 border px-1 py-1 rounded md:ml-3"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
