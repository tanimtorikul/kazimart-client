import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch products
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  //  product count
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
