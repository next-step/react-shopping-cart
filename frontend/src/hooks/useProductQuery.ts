import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/product/getProduct";

type UseProductQuery = { id: number };

const initialData = { id: 0, price: 0, name: "", imageUrl: "" };

export const useProductQuery = ({ id }: UseProductQuery) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct({ id }),
    initialData,
  });
};
