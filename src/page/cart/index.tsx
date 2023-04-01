import Nav from "components/nav";

import "style/common/index.css";
import "./style.css";
import LeftSection from "./left-section";
import RightSection from "./right-section";

import { Header } from "common/ui/header";
import { useCartList } from "hooks/cart/useCartList";
import { useCart } from "hooks/cart/useCart";
import { useEffect } from "react";

const CartContent = () => {
  const { data, isError } = useCartList();
  const {
    userCartsState: carts,
    setUserCartsState,
    selectCart,
    setAllChecked,
    deleteCartItem,
    deleteCartItems,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
  } = useCart();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching cart list:", isError);
      alert("Failed to load cart list.");
      return;
    }

    if (data) {
      setUserCartsState(
        data.map((cart) => ({ ...cart, checked: false, quantity: 1 }))
      );
    }
  }, [data, isError, setUserCartsState]);

  return (
    <section className="cart-section">
      <Header title={"장바구니"} />
      <div className="flex">
        <LeftSection
          carts={carts}
          selectCart={selectCart}
          setAllChecked={setAllChecked}
          deleteCartItem={deleteCartItem}
          deleteCartItems={deleteCartItems}
          increaseCartItemQuantity={increaseCartItemQuantity}
          decreaseCartItemQuantity={decreaseCartItemQuantity}
        />
        <RightSection carts={carts} deleteCartItems={deleteCartItems} />
      </div>
    </section>
  );
};

const CartPage = () => {
  return (
    <>
      <Nav />
      <CartContent />
    </>
  );
};

export default CartPage;
