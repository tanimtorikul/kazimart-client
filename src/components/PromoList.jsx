import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import usePromos from "../hooks/usePromo";

const PromoList = () => {
  const { promos, refetch } = usePromos(); 
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${name}. This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/promo/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success('Deleted from the promos.');
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
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {promos.map((promo, index) => (
            <tr key={index}>
              <td className="py-3 px-3 text-center">{index + 1}</td>
              <td className="py-3 px-3 flex justify-center">
                <img
                  src={promo.imgUrl}
                  alt={promo.title}
                  className="w-16 h-8 md:w-32 md:h-16 object-cover"
                />
              </td>
             
              
              <td className="py-3 px-3 text-center">
                <button
                  onClick={() => handleDelete(promo._id,)}
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

export default PromoList;
