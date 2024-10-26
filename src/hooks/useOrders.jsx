import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axiosSecure.get("/orders");
      return response.data;
    },
  });

  // for specific user email
  const { data: userOrders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/orders/${user.email}`);
        return res.data;
      }
    },
  });

  return { orders, refetch, isLoading, userOrders };
};

export default useOrders;
