import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useOrders from "../../hooks/useOrders";
import useProducts from "../../hooks/useProducts";

const AdminSummary = () => {
  const axiosSecure = useAxiosSecure();
  const { allOrders } = useOrders();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const totalEarnings = () => {
    return allOrders
      .filter((order) => order.orderStatus === "Delivered")
      .reduce((acc, order) => acc + parseFloat(order.totalPrice || 0), 0);
  };
  const { allProducts } = useProducts();
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 my-4">
        Overall Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Orders Card */}
        <div className="bg-[#43B10F] p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">Total Orders</h2>
          <p className="text-3xl font-bold text-white">{allOrders.length}</p>
        </div>

        {/* Total Earnings Card */}
        <div className="bg-[#2C71DF] p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">Total Earnings</h2>
          <div className="flex items-center">
            <TbCurrencyTaka size={36} className="text-white" />
            <p className="text-3xl font-bold text-white">{totalEarnings()}</p>
          </div>
        </div>

        {/* Total Products Card */}
        <div className="bg-[#FC960E] p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">Total Products</h2>
          <p className="text-3xl font-bold text-white">{allProducts.length}</p>
        </div>

        {/* Total Users Card */}
        <div className="bg-[#2440D2] p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">Total Users</h2>
          <p className="text-3xl font-bold text-white">{users.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
