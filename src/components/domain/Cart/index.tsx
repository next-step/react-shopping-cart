import React from "react";
import CartSectionTitle from "./SectionTitle/CartSectionTitle";
import CartItemsSection from "./CartItemSection";
import OrderDisplaySection from "./OrderDisplaySection";
import { useAppSelector } from "../../../hooks/storeHooks";
import { useFetchData } from "../../../hooks/useFetchData";

const Cart = () => {
  const globalProduct = useAppSelector((state) => state.cart.products);

  return (
    <section className="cart-section">
      <CartSectionTitle />
      <div className="flex">
        <CartItemsSection product={globalProduct} />
        <OrderDisplaySection />
      </div>
    </section>
  );
};

export default Cart;
