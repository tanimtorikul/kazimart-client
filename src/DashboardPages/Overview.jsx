import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import OrdersOverview from "../components/OrdersOverview/OrdersOverview";
import AdminSummary from "../components/AdminSummary/AdminSummary";

const Overview = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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
        </>
      )}
    </div>
  );
};

export default Overview;
