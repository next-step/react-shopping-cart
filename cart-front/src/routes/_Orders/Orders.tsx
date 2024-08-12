import { createFileRoute } from "@tanstack/react-router";
import { Orders } from "../../Pages/Orders/Orders";
import { getOrders } from "../../Apis/api";

export const OrdersQueryOptions = () => {
  return { queryKey: ["orders"], queryFn: () => getOrders() };
};

export const Route = createFileRoute("/_Orders/Orders")({
  component: Orders,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(OrdersQueryOptions()),
  notFoundComponent: () => {
    return <p>order page doesn't exist!</p>;
  },
});
