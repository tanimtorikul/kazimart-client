import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = (currentPage, itemsPerPage, asc) => {
  const axiosPublic = useAxiosPublic();

  // Fetch products with pagination and sorting
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage, asc],
    queryFn: async () => {
      const sortOrder = asc ? "asc" : "desc";
      const res = await axiosPublic.get(
        `/products?page=${currentPage}&size=${itemsPerPage}&sort=${sortOrder}`
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
