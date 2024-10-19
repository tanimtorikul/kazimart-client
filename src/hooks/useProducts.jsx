import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = (currentPage, itemsPerPage) => {
  const axiosPublic = useAxiosPublic();

  //  products with pagination
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage], 
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });

  // Fetch product count
  const { data: productsCount = 0 } = useQuery({
    queryKey: ["productsCount"],
    queryFn: async () => {
      const res = await axiosPublic.get("/productsCount");
      return res.data.count;
    },
  });

  return {
    products,
    productsCount,
    refetch,
  };
};

export default useProducts;
