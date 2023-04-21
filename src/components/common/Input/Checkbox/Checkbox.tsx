/* eslint-disable no-console */
import React, { useCallback } from "react";
import { Product } from "../../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { selectItem } from "../../../../store/cartSlice";

export type Props = {
  product: Product;
  label?: string;
};

const Checkbox = ({ product, label }: Props) => {
  const dispatch = useAppDispatch();
  const isChecked = useAppSelector((state) => {
    const theItem = state.cart.products.find(
      (globalCartProduct) => globalCartProduct.id === product.id
    );
    return theItem?.isChecked;
  });

  const handleClick = () => {
    dispatch(selectItem(product));
  };

  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={isChecked}
        onClick={handleClick}
      />
      {label && (
        <label className="checkbox-label" htmlFor="checkbox">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
