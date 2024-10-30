import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //    react query
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  //  to clear cart items
  const clearCart = async () => {
    await axiosSecure.delete(`/carts?email=${user.email}`);
    refetch();
  };

  return [cart, refetch, clearCart];
};

export default useCart;
