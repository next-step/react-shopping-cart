import React, { Fragment } from "react";
import { ICartItem } from "../../domain/types";
import { ICartItemHandlers } from "../../hooks/cart/useCartItemHandlers";
import { CartItem } from "../CartItem";

type TProps = {
  items: ICartItem[];
  handlers: ICartItemHandlers;
  title?: string;
};

function CartItems({ items, title, handlers }: TProps) {
  return (
    <div>
      {title && <h3 className="cart-title">{title}</h3>}
      <hr className="divide-line-gray mt-10" />
      {items.map((item) => (
        <Fragment key={item.id}>
          <CartItem item={item} handlers={handlers} />
          <hr className="divide-line-thin mt-10" />
        </Fragment>
      ))}
    </div>
  );
}

export default CartItems;
