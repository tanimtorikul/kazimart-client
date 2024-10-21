import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/shared/DashboardNavbar";
import { Toaster } from "react-hot-toast";
import DashboardSidebar from "../../components/shared/DashboardSidebar";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../../utlis/Spinner";

const Dashboard = () => {
  const [isAdmin, isLoading] = useAdmin(); // Fetch admin status

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Navbar */}
      <DashboardNavbar />
      <hr />

      {/* Show Spinner until admin status is loaded */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex md:w-full">
          {/* Show Sidebar only if user is an admin */}
          {isAdmin && (
            <div className="md:w-64">
              <DashboardSidebar />
            </div>
          )}

          <div className="flex-grow p-4 bg-[#F1F5F9]">
            <Outlet />
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default Dashboard;
