import { FaTrashAlt } from "react-icons/fa";
import useBanners from "../hooks/useBanners";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const BannersList = () => {
  const { banners, refetch } = useBanners();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id, name) => {
    //
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${name}. This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/main-banners/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success(`${name} has been deleted from the banners.`);
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        toast.info("Action canceled.");
      }
    });
  };

  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-[#F2FCFD]">
          <tr>
            <th className="py-3 px-3 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              SL
            </th>
            <th className="py-3 px-3 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="py-3 px-3 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="py-3 px-3 text-center hidden sm:table-cell text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="py-3 px-3 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {banners.map((banner, index) => (
            <tr key={index}>
              <td className="py-3 px-3 text-center">{index + 1}</td>
              <td className="py-3 px-3 flex justify-center">
                <img
                  src={banner.imgUrl}
                  alt={banner.title}
                  className="w-16 h-8 md:w-32 md:h-16 object-cover"
                />
              </td>
              <td className="py-2 px-2 text-sm md:text-lg text-center">{banner.title}</td>
              <td className="py-3 px-3 hidden sm:table-cell text-center">
                {banner.description}
              </td>
              <td className="py-3 px-3 text-center">
                <button
                  onClick={() => handleDelete(banner._id, banner.title)}
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

export default BannersList;
