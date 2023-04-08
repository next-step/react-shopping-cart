import OrderListHeader from "./OrderListHeader";
import OrderListItem from "./OrderListItem";

export default function OrderList({ orders }) {
  return (
    <div className="order-list">
      {orders.map((order) => {
        return (
          <>
            <OrderListHeader key={order.id} order={order}></OrderListHeader>
            {order.orderDetails.map((orderDetail) => {
              return (
                <OrderListItem
                  key={orderDetail.id}
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
