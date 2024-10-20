import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = (currentPage, itemsPerPage, asc, search) => {
  const axiosPublic = useAxiosPublic();

  // Fetch products with pagination and sorting
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage, asc, search],
    queryFn: async () => {
      const sortOrder = asc ? "asc" : "desc";
      const res = await axiosPublic.get(
        `/products?page=${currentPage}&size=${itemsPerPage}&sort=${sortOrder}&search=${search}`
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

  // Fetch product by ID
  const fetchProductById = async (id) => {
    const res = await axiosPublic.get(`/products/${id}`);
    return res.data;
  };

  return {
    products,
    productsCount,
    fetchProductById,
    refetch,
  };
};

export default useProducts;
