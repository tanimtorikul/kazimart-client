
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/shared/DashboardNavbar";
import DashboardSideBar from "../../components/shared/DashboardSideBar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Navbar */}
        <DashboardNavbar />
        <hr />
        
        <div className="flex w-full">
        
          <div className="w-64">
            <DashboardSideBar />
          </div>
          
          <div className="flex-grow p-4">
            <Outlet />
          </div>
        </div>
        <Toaster/>
      </div>
    );
  };
  
  export default Dashboard;
  


