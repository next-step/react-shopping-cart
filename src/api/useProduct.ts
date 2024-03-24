import { useQuery } from "@tanstack/react-query";
import type { IProduct } from "@/types/product";

const fetchProduct = async (id: string): Promise<IProduct> => {
  return fetch(`/products/${id}`).then((res) => res.json());
};
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });
};

export default useProduct;
