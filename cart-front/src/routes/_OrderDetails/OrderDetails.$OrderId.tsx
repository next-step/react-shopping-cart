import { createFileRoute } from "@tanstack/react-router";
import { OrderDetails } from "../../Pages/OrderDetails/OrderDetails";
import { getOrder } from "../../Apis/api";
import { queryOptions } from "@tanstack/react-query";

export const OrderDetailsQueryOptions = (OrderId: string) => {
  return queryOptions({
    queryKey: ["OrderDetails", { OrderId }],
    queryFn: () => getOrder(OrderId),
  });
};

export const Route = createFileRoute("/_OrderDetails/OrderDetails/$OrderId")({
  component: OrderDetails,
  loader: ({ context: { queryClient }, params: { OrderId } }) => {
    return queryClient.ensureQueryData(OrderDetailsQueryOptions(OrderId));
  },
});
