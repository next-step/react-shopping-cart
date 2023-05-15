import React, { memo, ReactNode } from "react";
import useCart from "../../../../hooks/useCart";

type Props = {
  children?: ReactNode;
};

const OrderItemListSection = ({ children }: Props) => {
  const { products } = useCart();

  return (
    <section className="cart-left-section ">
      {children}
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
