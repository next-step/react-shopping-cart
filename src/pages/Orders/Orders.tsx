import React, { useEffect, useState } from 'react';
import { OrderItem } from '../../components/OrderItem';
import { IOrder, IOrderResponse } from '../../domain/shopping-cart/types';

function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch('/api/orders');
      const json = (await response.json()) as IOrderResponse;

      setOrders(json.orders);
    };

    loadProducts();
  }, []);

  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>

      {orders.map((item) => (
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
