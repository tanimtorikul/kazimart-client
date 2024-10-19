import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useProducts from "../hooks/useProducts";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TbCurrencyTaka } from "react-icons/tb";

const Overview = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const totalEarnings = 2459;
  const totalOrders = 24;
  const {products} = useProducts();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <p className="text-gray-600 text-sm md:text-xl">
        Hi, {user ? user.displayName.split(" ")[0] : "User"}! Welcome to the{" "}
        {isAdmin ? "Admin" : "User"} Dashboard.
      </p>
      <div className="mb-4">
        <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {isAdmin ? "Admin Overview" : "User Overview"}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Earnings Card */}
        <div className="p-6 bg-green-100 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Earnings
          </h2>
          <div className="flex items-center justify-center mt-2">
            <TbCurrencyTaka className="w-8 h-8 text-2xl text-green-600" />
            <p className="text-2xl font-bold text-green-600">{totalEarnings}</p>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="p-6 bg-blue-100 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
          <p className="text-2xl font-bold text-blue-600 mt-2">{totalOrders}</p>
        </div>

        {/* All Users Card */}
        <div className="p-6 bg-purple-100 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-700">All Users</h2>
          <p className="text-2xl font-bold text-purple-600 mt-2">
            {users.length}
          </p>
        </div>

        {/* Total Products Card */}
        <div className="p-6 bg-[#F2DFE0] shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Products
          </h2>
          <p className="text-2xl font-bold text-orange-600 mt-2">
            {products.length}
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 py-6">
          {/* TODO: admin statistics using chartjs */}
          Admin Statistics
        </h1>
      </div>
    </div>
  );
};

export default Overview;
