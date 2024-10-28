import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useOrders = (currentPage, itemsPerPage, search) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // all orders with pagination and search
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders", currentPage, itemsPerPage, search],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/orders?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );
      return response.data;
    },
  });
  // Fetch order count
  const { data: ordersCount = 0 } = useQuery({
    queryKey: ["ordersCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ordersCount");
      return res.data.count;
    },
  });

  // all orders
  const { data: allOrders = [],  } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allorders`);
      return res.data;
    },
  });
  //  orders for a specific user by email
  const { data: userOrders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/allorders/${user.email}`);
        return res.data;
      }
    },
  });

  return { orders, refetch, isLoading, userOrders, allOrders, ordersCount };
};

export default useOrders;
