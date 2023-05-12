import React from "react";
import OrderItemList from "./ItemSection";
import { PayDisplaySection } from "./ResultDisplaySection";
import PageTitle from "../../common/PageTitle/PageTitle";

const Order = () => {
  return (
    <section className="cart-section">
      <PageTitle title={"주문/결제"} />
      <div className="flex">
        <OrderItemList />
        <PayDisplaySection />
      </div>
    </section>
  );
};

export default Order;
