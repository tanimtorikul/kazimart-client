import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCategories = () => {
    const axiosPublic = useAxiosPublic();

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"], 
    queryFn: async () => {
      const response = await axiosPublic.get("/categories");
      return response.data;
    },
  });

  return { categories, refetch };
};

export default useCategories;