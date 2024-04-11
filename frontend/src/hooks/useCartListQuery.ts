import { useQuery } from "@tanstack/react-query";
import { getCartList } from "../api/cart/getCartList";

const initialData = [
  {
    id: 0,
    product: {
      name: "",
      price: 0,
      imageUrl: "",
    },
  },
];

const useCartListQuery = () => {
  return useQuery({
    queryKey: ["cartList"],
    queryFn: getCartList,
    initialData,
  });
};

export default useCartListQuery;
