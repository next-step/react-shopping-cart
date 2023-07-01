import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import OrderProduct from "../../components/OrderItem/OrderProduct";
import { useOrders, useProducts } from "../../hooks";
import { SectionHeader } from "../../components/SectionHeader";

function Orders() {
  const { ref: infiniteRef, inView } = useInView();
  const {
    pageRef,
    orders,
    queries: { fetchNextPage, hasNextPage },
  } = useOrders();

  const { handleAddToCart } = useProducts();

  useEffect(() => {
    if (inView && hasNextPage) {
      pageRef.current += 1;
      fetchNextPage({ pageParam: pageRef.current });
    }
  }, [inView]);

  return (
    <section className="order-section">
      <SectionHeader title="주문 목록" />

      {orders.map((item) => (
        <div key={item.id} className="order--list">
          <div className="order-list__header">
            <span>주문번호: {item.id}</span>
            <span>상세보기 &gt;</span>
          </div>

          {item.orderDetails.map((product) => (
            <OrderProduct key={product.id} product={product} onClick={handleAddToCart} />
          ))}
        </div>
      ))}
      <hr ref={infiniteRef} style={{ visibility: "hidden" }} />
    </section>
  );
}

export default Orders;
