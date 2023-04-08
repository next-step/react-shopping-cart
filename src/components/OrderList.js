import OrderListHeader from "./OrderListHeader";
import OrderListItem from "./OrderListItem";

export default function OrderList({ orders }) {
  return (
    <div className="order-list">
      {orders.map((order, idx) => {
        return (
          <>
            <OrderListHeader key={idx} order={order}></OrderListHeader>
            {order.orderDetails.map((orderDetail, idx) => {
              return (
                <OrderListItem
                  key={idx}
                  orderDetail={orderDetail}
                ></OrderListItem>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
