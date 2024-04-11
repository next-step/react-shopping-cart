import { createLazyFileRoute } from "@tanstack/react-router";
import { ROUTE_PATH } from "../domain/route";
import OrderList from "../pages/order/order-list/OrderList";

export const Route = createLazyFileRoute(ROUTE_PATH.ORDER_LIST)({
  component: OrderList,
});
