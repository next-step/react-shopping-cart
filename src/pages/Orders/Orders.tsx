import React from "react";
import { OrderItem } from "../../components";
import { useOrders } from "../../hooks";

function Orders() {
  const { orders } = useOrders();

  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>

      {orders.map((item) => (
        <div key={item.id} className="order--list">
          <div className="order-list__header">
            <span>주문번호: {item.id}</span>
            <span>상세보기 &gt;</span>
          </div>

          {item.orderDetails.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Orders;
