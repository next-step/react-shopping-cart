import { useState, useEffect } from "react";
import OrderList from "../../components/OrderList";

export default function Order() {
  const [orders, setOrders] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>
      <OrderList orders={orders} />
    </section>
  );
}
