import React from "react";
import useCart from "../../../../hooks/useCart";
import type { Product } from "../../../../store/cartSlice";

export type Props = {
  product: Product;
};

const QuantityCounter = ({ product }: Props) => {
  const { increaseItemQuantity, decreaseItemQuantity } = useCart();

  const handleIncrease = () => {
    increaseItemQuantity(product);
  };
  const handleDecrease = () => {
    decreaseItemQuantity(product);
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={product.quantity} />
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
