import Header from "components/header";
import Nav from "components/nav";

import "style/common/index.css";
import "./style.css";
import LeftSection from "./left-section";
import RightSection from "./right-section";

import { useCart } from "hooks/useCart";

const CartContent = () => {
  const { data: carts, isLoading, isError } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product data</div>;
  }

  if (!carts) {
    return <div>No cart data available</div>;
  }

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
