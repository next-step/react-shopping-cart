import React from "react";
import deleteSvg from "../../assets/svgs/trash.svg";
import QuantityHandler from "./QuantityHandler";
import { CART } from "../../domain/constants";
import { ICartItemUI } from "../types";
import { IProduct } from "../../domain/types";

type TProps = {
  item: ICartItemUI;
  handlers: {
    toggleChecked: (item: ICartItemUI) => void;
    handleDeleteItem: (item: ICartItemUI) => void;
    handleIncrement: (item: ICartItemUI) => void;
    handleDecrement: (item: ICartItemUI) => void;
  };
};

const getTotalPrice = ({ price, quantity = CART.PRODUCTS.MIN_QUANTITY }: IProduct) => price * quantity;

function CartItem({ item, handlers: { toggleChecked, handleDeleteItem, handleIncrement, handleDecrement } }: TProps) {
  const {
    product: { name, imageUrl, checked, quantity = CART.PRODUCTS.DEFAULT_INITIAL_QUANTITY },
  } = item;

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input
          type="checkbox"
          name="checkbox"
          className="checkbox"
          checked={!!checked}
          onChange={() => toggleChecked(item)}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src={deleteSvg} alt="삭제" onClick={() => handleDeleteItem(item)} />
        <QuantityHandler
          quantity={quantity}
          onIncrement={() => handleIncrement(item)}
          onDecrement={() => handleDecrement(item)}
        />
        <span className="cart-price">{getTotalPrice(item.product).toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default CartItem;
