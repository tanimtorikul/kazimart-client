import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import OrdersOverview from "../components/OrdersOverview/OrdersOverview";
import AdminSummary from "../components/AdminSummary/AdminSummary";
import useOrders from "../hooks/useOrders";
import OrdersDoughnutChart from "../components/OrdersOverview/OrdersDoughnutChart";
import { Helmet } from "react-helmet-async";
const Overview = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const { orders } = useOrders();

  const orderCounts = {
    Pending: 0,
    Processing: 0,
    Shipped: 0,
    Delivered: 0,
    Cancelled: 0,
  };

  orders.forEach((order) => {
    orderCounts[order.orderStatus] += 1;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <p className="text-gray-600 text-sm md:text-lg">
        Hi, {user ? user.displayName.split(" ")[0] : "User"}! Welcome to the{" "}
        {isAdmin ? "Admin" : "User"} Dashboard.
      </p>
      <div className="mb-4">
        <h1 className="text-sm md:text-lg font-semibold text-gray-800 mb-2">
          {isAdmin ? "Orders Analytics" : "User Overview"}
        </h1>
      </div>
      {isAdmin && (
        <>
          {/* all orders overview */}
          <OrdersOverview />
          {/* admin's overview summary */}
          <AdminSummary />
          {/* Include the Pie Chart */}
          <OrdersDoughnutChart orderCounts={orderCounts} />
        </>
      )}
    </div>
  );
};

export default Overview;
