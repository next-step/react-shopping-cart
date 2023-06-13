import React from "react";
import deleteSvg from "../../assets/svgs/trash.svg";
import QuantityHandler from "./QuantityHandler";
import useCartItem from "./hooks/useCartItem";
import { ICartItem } from "../../domain/shopping-cart/types";
import { CART } from "../../domain/shopping-cart/constants";

type TCartItemProps = {
  item: ICartItem;
};

const {
  PRODUCTS: { DEFAULT_INITIAL_QUANTITY },
} = CART;

function CartItem({ item }: TCartItemProps) {
  const {
    product: { name, imageUrl, checked, quantity = DEFAULT_INITIAL_QUANTITY },
  } = item;
  const { totalPrice, handleToggleChecked, handleRemovingProduct, handleIncrement, handleDecrement } =
    useCartItem(item);

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input
          type="checkbox"
          name="checkbox"
          className="checkbox"
          checked={!!checked}
          onChange={handleToggleChecked}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src={deleteSvg} alt="삭제" onClick={handleRemovingProduct} />
        <QuantityHandler quantity={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <span className="cart-price">{totalPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default CartItem;
