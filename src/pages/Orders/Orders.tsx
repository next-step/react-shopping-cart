import React from "react";
import sampleOrderItems from "../../samplejson/orders";
import { OrderItem } from "../../components/OrderItem";

function Orders() {
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>

      {sampleOrderItems.map((item) => (
        <div key={item.id} className="order--list">
          <div className="order-list__header">
            <span>주문번호: 1</span>
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
