import React from "react";

import { OrderProductList } from "@/components/orders";
import { useFetchOrderProducts } from "@/hooks/api";

export default function Orders() {
  const { orders } = useFetchOrderProducts();

  return (
    <div>
      {orders.map((order) => {
        return <OrderProductList key={order.id} orderInfo={order} />;
      })}
    </div>
  );
}
