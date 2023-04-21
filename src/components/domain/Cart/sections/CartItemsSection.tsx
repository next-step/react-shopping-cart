import React, { useEffect, useState } from "react";
import CheckboxContainer from "../etc/CheckboxContainer";
import CartTitle from "../etc/CartTitle";
import CartProductContainer from "../etc/CartItem";
import Divider from "../../../common/Divider/Divider";
import { useFetchData } from "../../../../hooks/useFetchData";
import { Product } from "../../../../store/store";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { initialState } from "../../../../store/cartSlice";

const CartItemsSection = () => {
  const globalCart = useAppSelector((state) => state.cart.products);

  // 디버깅 위한 일시적 변경
  // const cart = useFetchData(CART_PRODUCTS_URL, globalCart);
  const cart = initialState.products;

  return (
    <section className="cart-left-section">
      <CheckboxContainer />
      <CartTitle />
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <CartProductContainer product={product} />
            <Divider />
          </div>
        );
      })}
    </section>
  );
};

export default CartItemsSection;

const CART_PRODUCTS_URL = "http://localhost:3000/cart";
