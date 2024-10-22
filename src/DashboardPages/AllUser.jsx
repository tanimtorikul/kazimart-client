import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../utlis/Spinner";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {/* Total Users */}
          <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-700">
              Total Users: {users.length}
            </h2>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-[#F2FCFD]">
                <tr>
                  <th className="py-3 px-5 text-center">SL</th>
                  <th className="py-3 px-5 text-center">Name</th>
                  <th className="py-3 px-5 text-center">Email</th>
                  <th className="py-3 px-5 text-center">Role</th>
                  <th className="py-3 px-5 text-center hidden sm:table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="py-3 px-5 text-center">{index + 1}</td>
                    <td className="py-3 px-5 text-center">{user.name}</td>
                    <td className="py-3 px-5 text-center">{user.email}</td>
                    <td className="py-3 px-5 text-center">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="border-[#01684b] text-[#01684b] border px-1 py-1 rounded"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-5 text-center">
                      <button
                        onClick={() => handleDelete(user)}
                        className="border-red-500 text-red-500 border px-1 py-1 rounded"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUser;
