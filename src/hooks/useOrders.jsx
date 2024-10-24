import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
  const axiosPublic = useAxiosSecure();

  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axiosPublic.get("/orders");
      return response.data;
    },
  });

  return { orders, refetch, isLoading };
};

export default useOrders;
