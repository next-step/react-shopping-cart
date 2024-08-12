import { useSuspenseQuery } from "@tanstack/react-query";
import { OrdersQueryOptions } from "../../routes/_Orders/Orders";
import { OrderListHeader } from "./OrderListHeader";
import { OrdersList } from "./Orderslist";

export const Orders = () => {
  const { data } = useSuspenseQuery(OrdersQueryOptions());

  return (
    <>
      <OrderListHeader />
      <OrdersList data={data} />
    </>
  );
};
