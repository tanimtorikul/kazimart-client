import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCategories = () => {
    const axiosPublic = useAxiosPublic();

  const { data: categories = [], refetch, isLoading } = useQuery({
    queryKey: ["categories"], 
    queryFn: async () => {
      const response = await axiosPublic.get("/categories");
      return response.data;
    },
  });

  return { categories, refetch, isLoading };
};

export default useCategories;