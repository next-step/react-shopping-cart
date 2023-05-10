import React from "react";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import type { Product } from "../../../../store/cartSlice";

export type Props = {
  product: Product;
};

const QuantityCounter = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const updatedQuantity = useAppSelector((state) => {
    const theItem = state.cart.products.find(
      (globalCartProduct) => globalCartProduct.id === product.id
    );
    return theItem?.quantity;
  });

  const handleIncrease = () => {
    dispatch(increaseQuantity(product));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product));
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={updatedQuantity} />
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
