import useCategories from "../../hooks/useCategories";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { MdEdit } from "react-icons/md";
import Spinner from "../../utlis/Spinner";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const { categories, refetch, isLoading } = useCategories();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id, category) => {
    //
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${category}. This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/categories/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success(`${category} has been deleted from the banners.`);
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        toast.info("Action canceled.");
      }
    });
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
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
                <th className="py-3 px-5  sm:table-cell text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
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
                    <Link to={`/dashboard/update-category/${category._id}`}>
                      <button className="border-blue-500 text-blue-500 border px-1 py-1 rounded md:ml-3">
                        <MdEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() =>
                        handleDelete(category._id, category.category)
                      }
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
      )}
    </div>
  );
};

export default CategoriesList;
