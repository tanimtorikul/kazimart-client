import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="px-4 md:px-4 lg:px-0">
        <div className="min-h-screen py-12 md:py-24 ">
          <Outlet></Outlet>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
