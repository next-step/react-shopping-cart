import { useSuspenseQuery } from "@tanstack/react-query";
import { OrderPaymentQueryOptions } from "../../Apis/QueryOptions/QueryOptions";
import { OrderPaymentView } from "./OrderPaymentView";

export const OrderPayment = () => {
  const {
    data: { orders },
  } = useSuspenseQuery(OrderPaymentQueryOptions());
  console.log("orders", orders);
  return <OrderPaymentView orderDetails={orders} />;
};
