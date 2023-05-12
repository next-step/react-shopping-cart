import React, { memo } from "react";
import useCart from "../../../../hooks/useCart";
import ListTitle from "../../../common/ListTitle/ListTitle";

const OrderItemListSection = () => {
  const { products, getTotalAmount } = useCart();
  const quantity = getTotalAmount();

  return (
    <section className="cart-left-section">
      <ListTitle title={"주문 상품"} quantity={quantity} />
      {products.map((product) => (
        <div key={product.id}>
          <div className="flex gap-15 mt-10">
            <img
              className="w-144 h-144"
              src={product.imageUrl}
              alt={product.name}
            />
            <span className="cart-name">{product.name}</span>
          </div>
          <div className="flex-col-center justify-end gap-15"></div>
        </div>
      ))}
    </section>
  );
};

export default memo(OrderItemListSection);
