import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/shared/DashboardNavbar";
import { Toaster } from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
import AdminSidebar from "../../components/shared/AdminSidebar";
import Spinner from "../../utlis/Spinner";

const Dashboard = () => {
  const [isAdmin, isLoading] = useAdmin(); 

  return (
    <div className="bg-gray-50 min-h-screen font-albert">
      <DashboardNavbar />
      <hr />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex md:w-full">
          {isAdmin && (
            <div className="md:w-64">
              <AdminSidebar />
            </div>
          )}
          <div className="flex-grow px-4 py-1 bg-[#F1F5F9]">
            <Outlet />
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Dashboard;
