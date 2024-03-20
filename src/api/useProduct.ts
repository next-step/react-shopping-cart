import { useQuery } from "@tanstack/react-query";
import type { IProduct } from "@/types";

const fetchProduct = async (id: string): Promise<IProduct> => {
  return fetch(`/product/${id}`).then((res) => res.json());
};
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};

export default useProduct;
