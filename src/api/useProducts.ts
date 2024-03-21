import { useInfiniteQuery } from "@tanstack/react-query";
import type { IProduct } from "@/types/product";

const fetchProducts = async (page: number): Promise<IProduct[]> => {
  return fetch(`/products?page=${page}&limit=${12}`).then((res) => res.json());
};

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => fetchProducts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
      lastPageParam + 1,
  });
};

export default useProducts;
