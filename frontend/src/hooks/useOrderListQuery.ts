import { useQuery } from "@tanstack/react-query";
import getOrderList from "../api/order/getOrderList";

const initialData = [
  {
    id: 0,
    orderDetails: [
      {
        id: 0,
        quantity: 0,
        name: "",
        price: 0,
        imageUrl: "",
      },
    ],
  },
];

export const useOrderListQuery = () => {
  return useQuery({
    queryKey: ["orderList"],
    queryFn: getOrderList,
    initialData,
  });
};
