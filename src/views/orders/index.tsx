import React, { useEffect } from "react";

import { OrderProductList } from "@/components/orders";
import { useFetchOrderProducts } from "@/hooks/api";

export default function Orders() {
  const { orders, fetchOrders } = useFetchOrderProducts();

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      {orders.map((order) => {
        return <OrderProductList key={order.id} orderInfo={order} />;
      })}
    </div>
  );
}
