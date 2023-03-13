import Header from "components/header";
import Nav from "components/nav";

import "style/common/index.css";
import "./style.css";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import { useCartContext } from "store/context/CartContext";
import { useCallback, useEffect } from "react";

const CartContent = () => {
  const { carts, fetchCarts } = useCartContext();

  const handleFetchProducts = useCallback(() => {
    fetchCarts();
  }, [fetchCarts]);

  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="flex">
        <LeftSection carts={carts}/>
        <RightSection />
      </div>
    </section>
  );
};

const CartPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <CartContent />
    </>
  );
};

export default CartPage;
