import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (user) => {
    axiosSecure.delete(`/users/${user._id}`).then((res) => {
      // console.log(res);
      if (res.data.deletedCount > 0) {
        toast.success(`${user.name} is removed!`);
        refetch();
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is now an Admin!`);
      }
    });
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Manage Users
      </h2>

      {/* Total Users */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-700">
          Total Users: {users.length}
        </h2>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                SL
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="py-3 px-5 text-sm text-gray-700">{index + 1}</td>
                <td className="py-3 px-5 text-sm text-gray-700">{user.name}</td>
                <td className="py-3 px-5 text-sm text-gray-700">
                  {user.email}
                </td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn"
                    >
                      <p>Make Admin</p>
                    </button>
                  )}
                </td>
              
                <td>
                  <button onClick={() => handleDelete(user)} className="btn">
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
