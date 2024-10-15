
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/shared/DashboardNavbar";
import DashboardSideBar from "../../components/shared/DashboardSideBar";

const Dashboard = () => {
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sidebar */}
  

      <div >
        {/* Navbar */}
        <DashboardNavbar />
        <hr />
        
        <div className="flex w-full">
        <DashboardSideBar />
          {/* Main content */}
          <div className="p-4">
          <Outlet />
        </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default Dashboard;
