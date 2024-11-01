import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = (productId) => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      const response = await axiosPublic.get(`/reviews?productId=${productId}`);
      return response.data;
    },
  });

  return { reviews, refetch };
};

export default useReviews;
