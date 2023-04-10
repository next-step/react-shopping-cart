import React, { useEffect, useState } from "react";

import Divider from "../components/common/Divider/Divider";
import CartItem from "../components/domain/Cart/CartItem";
import CartSectionTitle from "../components/domain/Cart/CartSectionTitle";
import CartTitle from "../components/domain/Cart/CartTitle";
import CheckboxContainer from "../components/domain/Cart/CheckboxContainer";
import TotalPrice from "../components/domain/TotalPrice/TotalPrice";
import Button from "../components/common/Button/Button";
import { useSelector } from "react-redux";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 0, price: 0, name: "", imageUrl: "" },
  ]);
  const checkedItemQuantity = useSelector((state) => {
    return 0;
  });

  useEffect(() => {
    fetch("http://localhost:3000/cart").then((res) =>
      res.json().then((res) => {
        setCartItems(res);
      })
    );
  }, []);

  return (
    <section className="cart-section">
      <CartSectionTitle />

      <div className="flex cart-subsection">
        <section className="cart-left-section">
          <CheckboxContainer />
          <CartTitle />
          {cartItems.map((cartItem) => {
            const { id, name, price, imageUrl } = cartItem;
            return (
              <div key={id}>
                <CartItem
                  id={id}
                  price={price}
                  name={name}
                  imageUrl={imageUrl}
                />
                <Divider />
              </div>
            );
          })}
        </section>
        <TotalPrice title={"장바구니"} price={0}>
          <Button
            className="primary-button"
            paren={checkedItemQuantity}
            onClick={() => alert("결제창 이동")}
          >
            장바구니
          </Button>
        </TotalPrice>
      </div>
    </section>
  );
};

export default CartPage;
