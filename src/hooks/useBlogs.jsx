import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogs = (id) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: id ? ["blog", id] : ["blogs"],
    queryFn: async () => {
      if (id) {
        const response = await axiosPublic.get(`/get-blog/${id}`);
        return response.data;
      }
      const response = await axiosPublic.get("/get-blogs");
      return response.data;
    },
  });

  return { blogs, isLoading, refetch };
};

export default useBlogs;
