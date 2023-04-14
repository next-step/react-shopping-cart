import React, { useEffect, useState } from "react";
import CheckboxContainer from "../etc/CheckboxContainer";
import CartTitle from "../etc/CartTitle";
import CartItem from "../etc/CartItem";
import Divider from "../../../common/Divider/Divider";
import { fetchProducts } from "../../../../hooks/httpHooks";

const CartItemsSection = () => {
  const [cartItems, setCartItems] = useState([
    { id: 0, price: 0, name: "", imageUrl: "" },
  ]);

  useEffect(() => {
    fetchProducts(CART_PRODUCTS_URL)
      .then((res) => setCartItems(res))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <section className="cart-left-section">
      <CheckboxContainer />
      <CartTitle />
      {cartItems.map((cartItem) => {
        const { id, name, price, imageUrl } = cartItem;
        return (
          <div key={id}>
            <CartItem id={id} price={price} name={name} imageUrl={imageUrl} />
            <Divider />
          </div>
        );
      })}
    </section>
  );
};

export default CartItemsSection;

const CART_PRODUCTS_URL = "http://localhost:3000/cart";
