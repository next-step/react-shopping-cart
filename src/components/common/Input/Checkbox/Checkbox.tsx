import React from "react";
import type { Product } from "../../../../store/cartSlice";

export type Props = {
  product?: Product;
  label?: string;
  onClick?: () => void;
};

const Checkbox = ({ product, label, onClick }: Props) => {
  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={product?.isChecked}
        onClick={onClick}
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
