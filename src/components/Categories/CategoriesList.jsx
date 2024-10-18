import { MdEdit } from "react-icons/md";
import useCategories from "../../hooks/useCategories";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const CategoriesList = () => {
  const { categories, refetch } = useCategories();
  const axiosSecure = useAxiosSecure();

  //   handle delete to delete category
  const handleDelete = (id, category) => {
    axiosSecure.delete(`/categories/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`${category} is deleted from the category list`);
      }
    });
  };

  return (
    <div className="overflow-x-auto py-4">
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
              Category Name
            </th>
            <th className="py-3 px-5 hidden sm:table-cell text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td className="py-3 px-5 text-center">{index + 1}</td>
              <td className="py-3 px-5 flex justify-center">
                <img
                  src={category.imgUrl}
                  className="w-16 h-8 md:w-32 md:h-16 object-cover"
                />
              </td>
              <td className="py-2 px-2 text-center">{category.category}</td>
              <td className="py-3 px-5 text-center">
                <button className="border-blue-500 text-blue-500 border px-1 py-1 rounded">
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleDelete(category._id, category.category)}
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

export default CategoriesList;
