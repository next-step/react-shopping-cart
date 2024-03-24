import { useInfiniteQuery } from "@tanstack/react-query";
import { apiClient } from "./axios";
import type { IProduct } from "@/types/product";

const fetchProducts = async (page: number) => {
  const query = new URLSearchParams({ page: page.toString(), limit: "12" });
  const { data } = await apiClient.get<IProduct[]>(
    `/products?${query.toString()}`
  );
  return data;
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
