import useAdmin from "../hooks/useAdmin";
import OrdersOverview from "../components/OrdersOverview/OrdersOverview";
import AdminSummary from "../components/AdminSummary/AdminSummary";
import useOrders from "../hooks/useOrders";
import OrdersDoughnutChart from "../components/OrdersOverview/OrdersDoughnutChart";
import { Helmet } from "react-helmet-async";
import UserOrders from "./UserOrders";

const Overview = () => {
  const [isAdmin] = useAdmin();
  const { allOrders } = useOrders();

  const orderCounts = {
    Pending: 0,
    Processing: 0,
    Shipped: 0,
    Delivered: 0,
    Cancelled: 0,
  };

  allOrders.forEach((order) => {
    if (orderCounts[order.orderStatus] !== undefined) {
      orderCounts[order.orderStatus] += 1;
    }
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <p className="text-gray-600 text-sm md:text-lg">
        {isAdmin ? ", Welcome to the Admin Dashboard." : null}
      </p>

      {isAdmin ? (
        <>
          {/* Admin's overview summary */}
          <AdminSummary />
          {/* All orders overview */}
          <OrdersOverview />
          {/* DoughnutChart */}
          <OrdersDoughnutChart orderCounts={orderCounts} />
        </>
      ) : (
        <UserOrders />
      )}
    </div>
  );
};

export default Overview;
