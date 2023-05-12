import React from "react";
import ProductsControllers from "./ProductsControllers";
import CartProductContainer from "./CartProductContainer.tsx";
import Divider from "../../../common/Divider/Divider";
import useCart from "../../../../hooks/useCart";
import ListTitle from "../../../common/ListTitle/ListTitle";

const CartItemsSection = () => {
  const { products } = useCart();
  const { getTotalAmount } = useCart();
  const totalAmount = getTotalAmount();

  return (
    <section className="cart-left-section">
      <ProductsControllers />
      <ListTitle title={"든든배송 상품"} quantity={totalAmount} />
      {products.map((product) => {
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
