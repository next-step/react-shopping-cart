import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product/getProducts";

const initialData = [
  {
    id: 0,
    name: "",
    price: 0,
    imageUrl: "",
    quantity: 0,
  },
];

const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData,
  });
};

export default useProductsQuery;
