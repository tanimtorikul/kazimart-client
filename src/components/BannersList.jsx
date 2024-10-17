import { MdEdit } from "react-icons/md";
import mainBanners from "../../public/mainbanners.json";
import { FaTrashAlt } from "react-icons/fa";

const BannersList = () => {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-[#F2FCFD]">
          <tr className="">
            <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
              SL
            </th>
            <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="py-3 px-5  text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mainBanners.map((banner, index) => (
            <tr key={index}>
              <td className="py-3 px-5 text-center">{index + 1}</td>
              <td className="py-3 px-5 flex justify-center">
                <img
                  src={banner.imgUrl}
                  alt={banner.title}
                  className="w-24 h-12 object-cover"
                />
              </td>
              <td className="py-3 px-5 text-center">{banner.title}</td>
              <td className="py-3 px-5 text-center">{banner.subtitle}</td>
              <td className="py-3 px-5 text-center">
                <button className="border-blue-500 text-blue-500 border px-1 py-1 rounded">
                  <MdEdit />
                </button>
                <button className="border-red-500 text-red-500 border px-1 py-1 rounded ml-3">
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
