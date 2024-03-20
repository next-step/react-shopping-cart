import { useQuery } from "@tanstack/react-query";
import type { IProduct } from "@/types";

const fetchProducts = async (): Promise<IProduct[]> => {
  return fetch("/products").then((res) => res.json());
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
