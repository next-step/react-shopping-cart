import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import OrderProduct from "../../components/OrderItem/OrderProduct";
import { useOrders, useProducts } from "../../hooks";
import { Spinner } from "../../components/Spinner";

function OrderList() {
  const { ref: infiniteRef, inView } = useInView();
  const {
    pageRef,
    orders,
    queries: { fetchNextPage, hasNextPage, isFetching, isRefetching },
  } = useOrders();

  const { handleAddToCart } = useProducts();

  useEffect(() => {
    if (inView) {
      pageRef.current += 1;
      fetchNextPage({ pageParam: pageRef.current });
    }
  }, [inView]);

  return (
    <>
      {isRefetching && <Spinner />}
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
      {hasNextPage && orders?.length && <hr ref={infiniteRef} style={{ visibility: "hidden" }} />}
      {isFetching && <Spinner />}
    </>
  );
}

export default OrderList;
