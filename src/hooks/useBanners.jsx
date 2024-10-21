import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBanners = () => {
  const axiosPublic = useAxiosPublic();

  const { data: banners = [], refetch, isLoading } = useQuery({
    queryKey: ["banners"], 
    queryFn: async () => {
      const response = await axiosPublic.get("/main-banners");
      return response.data;
    },
  });

  return { banners, refetch, isLoading };
};

export default useBanners;
