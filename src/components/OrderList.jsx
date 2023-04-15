import { Fragment } from "react";
import OrderListHeader from "./OrderListHeader";
import OrderListItem from "./OrderListItem";

export default function OrderList({ orders }) {
  return (
    <div className="order-list">
      {orders.map((order) => (
        <Fragment key={order.id}>
          <OrderListHeader order={order}></OrderListHeader>
          {order.orderDetails.map((orderDetail) => (
            <OrderListItem key={orderDetail.id} orderDetail={orderDetail} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
