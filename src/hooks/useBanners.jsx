import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useBanners = () => {
  const [banners, setBanners] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await axiosPublic.get("/main-banners");
      setBanners(response.data);
     
      
    };

    fetchBanners();
  }, [axiosPublic]);

  return {banners};
  
};

export default useBanners;
