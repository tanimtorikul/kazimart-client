
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/shared/DashboardNavbar";
import { Toaster } from "react-hot-toast";
import DashboardSidebar from '../../components/shared/DashboardSidebar'
const Dashboard = () => {
    return (
      <div className="bg-gray-50 min-h-screen font-poppins">
        {/* Navbar */}
        <DashboardNavbar />
        <hr />
        
        <div className="flex md:w-full">
        
          <div className="md:w-64">
            <DashboardSidebar />
          </div>
          
          <div className="flex-grow p-4 bg-[#F1F5F9]">
            <Outlet />
          </div>
        </div>
        <Toaster/>
      </div>
    );
  };
  
  export default Dashboard;
  


