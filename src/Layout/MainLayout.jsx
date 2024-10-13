import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-[1800px]  mx-auto font-poppins">
        <Navbar />
        <div className="border-b border"></div>
      </div>

      <div className="px-2 md:px-0 min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
