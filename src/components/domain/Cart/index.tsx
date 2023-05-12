import React from "react";
import CartItemsSection from "./CartItemSection";
import OrderDisplaySection from "./OrderDisplaySection";
import PageTitle from "../../common/PageTitle/PageTitle";

const Cart = () => {
  return (
    <section className="cart-section">
      <PageTitle title={"장바구니"} />
      <div className="flex">
        <CartItemsSection />
        <OrderDisplaySection />
      </div>
    </section>
  );
};

export default Cart;
