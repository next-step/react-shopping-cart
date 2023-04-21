import React from "react";
import CartSectionTitle from "./etc/CartSectionTitle";
import CartItemsSection from "./sections/CartItemsSection";
import OrderDisplaySection from "./sections/OrderDisplaySection";

const Cart = () => {
  return (
    <section className="cart-section">
      <CartSectionTitle />
      <div className="flex">
        <CartItemsSection />
        <OrderDisplaySection />
      </div>
    </section>
  );
};

export default Cart;
