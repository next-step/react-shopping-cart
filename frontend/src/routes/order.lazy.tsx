import { createLazyFileRoute } from "@tanstack/react-router";
import { ROUTE_PATH } from "../domain/route";

import Order from "../pages/order/order-payment/OrderPayment";

export const Route = createLazyFileRoute(ROUTE_PATH.ORDER)({
  component: Order,
});
