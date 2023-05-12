import React from "react";
import { useAppDispatch } from "../../../../hooks/storeHooks";
import type { Product } from "../../../../store/cartSlice";
import useCart from "../../../../hooks/useCart";

export type Props = {
  product: Product;
};

const QuantityCounter = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const { getTotalAmount, increaseItemQuantity, decreaseItemQuantity } =
    useCart();
  const amount = getTotalAmount();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(product));
  };
  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(product));
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={amount} />
      <div>
        <button className="number-input-button" onClick={handleIncrease}>
          ▲
        </button>
        <button className="number-input-button" onClick={handleDecrease}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
