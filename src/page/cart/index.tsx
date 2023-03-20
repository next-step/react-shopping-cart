import Nav from "components/nav";

import "style/common/index.css";
import "./style.css";
import LeftSection from "./left-section";
import RightSection from "./right-section";

import { useCart } from "hooks/cart";
import { Header } from "common/ui/header";

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
      <Header title={'장바구니'}/>
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
      <Nav />
      <CartContent />
    </>
  );
};

export default CartPage;
