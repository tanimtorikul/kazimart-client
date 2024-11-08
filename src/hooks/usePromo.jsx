import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePromos = () => {
  const axiosPublic = useAxiosPublic();

  const { data: promos = [], refetch, isLoading } = useQuery({
    queryKey: ["promos"], 
    queryFn: async () => {
      const response = await axiosPublic.get("/promo");  
      return response.data;
    },
  });

  return { promos, refetch, isLoading };
};

export default usePromos;
