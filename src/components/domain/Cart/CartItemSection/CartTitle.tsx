import React from "react";
import useCart from "../../../../hooks/useCart";

const CartTitle = () => {
  const { getTotalAmount } = useCart();
  const totalAmount = getTotalAmount();

  return (
    <div className="mt-30 mb-10">
      <h3 className="cart-title">든든배송 상품({totalAmount}개)</h3>
      <hr className="divide-line-gray mt-10" />
    </div>
  );
};

export default CartTitle;
