import { createLazyFileRoute } from "@tanstack/react-router";
import Cart from "../pages/cart/Cart";
import { ROUTE_PATH } from "../domain/route";

export const Route = createLazyFileRoute(ROUTE_PATH.CART)({
  component: Cart,
});
