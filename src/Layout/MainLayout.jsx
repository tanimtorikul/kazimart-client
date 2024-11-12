
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Spinner from "../utlis/Spinner";
import useBanners from "../hooks/useBanners";
import useProducts from "../hooks/useProducts";

const MainLayout = () => {
  const { isLoading: bannersLoading } = useBanners();
  const { isLoading: allProductsLoading } = useProducts();

  const isLoading = bannersLoading || allProductsLoading;

  return (
    <div className="font-albert">
      {isLoading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="px-4 md:px-0">
            <Outlet />
          </div>
          <Footer />
          <Toaster />
        </>
      )}
    </div>
  );
};

export default MainLayout;
