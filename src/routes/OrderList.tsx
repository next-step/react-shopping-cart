import { useEffect, useState } from "react";
import OrderGroup from "../components/order/OrderGroup";
import OrderProduct from "../components/order/OrderProduct";
import { Order } from "../types/order";
import { api } from "../utils/api";

function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const orders = await api.get<Order[]>("/orders");
        setOrders(orders);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      {orders.map((order) => (
        <OrderGroup order={order}>
          <>
            {order.orderDetails.map((detail) => (
              <OrderProduct orderDetail={detail} />
            ))}
          </>
        </OrderGroup>
      ))}
    </>
  );
}

export default OrderList;
