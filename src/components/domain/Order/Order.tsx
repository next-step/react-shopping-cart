import React from "react";
import OrderItemList from "./ItemSection";
import { PayDisplaySection } from "./ResultDisplaySection";
import PageTitle from "../../common/PageTitle/PageTitle";
import ListTitle from "../../common/ListTitle/ListTitle";
import useCart from "../../../hooks/useCart";

const Order = () => {
  const { getTotalAmount } = useCart();
  const quantity = getTotalAmount();

  return (
    <section className="cart-section">
      <PageTitle title={"주문/결제"} />
      <div className="flex">
        <OrderItemList>
          <ListTitle title={"주문 상품"} quantity={quantity} />
        </OrderItemList>
        <PayDisplaySection />
      </div>
    </section>
  );
};

export default Order;
