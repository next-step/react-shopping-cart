import { createFileRoute } from "@tanstack/react-router";
import { Cart } from "../../Pages/Cart/Cart";
import { getCarts } from "../../Apis/api";
import { queryOptions } from "@tanstack/react-query";

export const CartQueryOptions = () =>
  queryOptions({
    queryKey: ["Cart"],
    queryFn: () => getCarts(),
  });

export const Route = createFileRoute("/_Cart/Cart")({
  component: Cart,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(CartQueryOptions());
  },
  notFoundComponent: () => {
    return <p>cart page doesn't exist!</p>;
  },
});
