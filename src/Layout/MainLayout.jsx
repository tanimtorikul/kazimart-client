import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // checking if banners and products are no longer loading
    if (!bannersLoading && !allProductsLoading) {
      setLoading(false);
    }
  }, [bannersLoading, allProductsLoading]);

  return (
    <div className="font-poppins">
      {loading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <Spinner />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="px-2  md:px-0 pt-28 md:pt-36">
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
