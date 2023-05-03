import React, { useState } from "react";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { Product } from "../../../../store/store";

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
