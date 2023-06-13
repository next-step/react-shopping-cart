import React from "react";
import deleteSvg from "../../assets/svgs/trash.svg";
import QuantityHandler from "./QuantityHandler";
import { CART } from "../../domain/constants";
import useCartItem from "./hooks/useCartItem";
import { ICartItemUI } from "../types";

type TProps = {
  item: ICartItemUI;
};

function CartItem({ item }: TProps) {
  const {
    product: { name, imageUrl, checked, quantity = CART.PRODUCTS.DEFAULT_INITIAL_QUANTITY, createdAt },
  } = item;

  const {
    totalPrice,
    handlers: { toggleChecked, removeItem, handleIncrement, handleDecrement },
  } = useCartItem(item);

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input type="checkbox" name="checkbox" className="checkbox" checked={!!checked} onChange={toggleChecked} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
        <span>createdAt: {createdAt}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src={deleteSvg} alt="삭제" onClick={removeItem} />
        <QuantityHandler quantity={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <span className="cart-price">{totalPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default CartItem;
