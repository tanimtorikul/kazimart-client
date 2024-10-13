import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-[1800px]  mx-auto font-poppins">
      <div >
        <Navbar />
      </div>

      <div className="min-h-screen px-2 md:px-0 py-48">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
