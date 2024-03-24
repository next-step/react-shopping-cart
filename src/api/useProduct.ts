import { useQuery } from "@tanstack/react-query";
import type { IProduct } from "@/types/product";
import { apiClient } from "./axios";

const fetchProduct = async (id: string) => {
  const { data } = await apiClient.get<IProduct>(`/products/${id}`);
  return data;
};
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });
};

export default useProduct;
