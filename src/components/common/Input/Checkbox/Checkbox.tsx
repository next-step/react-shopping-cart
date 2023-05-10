import React, { useState } from "react";
import type { Product } from "../../../../store/cartSlice";

export type Props = {
  product?: Product;
  label?: string;
  onClick: () => void;
};

const Checkbox = ({ product, label, onClick }: Props) => {
  const [checkAll, setCheckAll] = useState(true);

  const handleCheckboxClick = () => {
    onClick();
    setCheckAll((prev) => !prev);
  };

  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={product ? product.isChecked : checkAll}
        onClick={handleCheckboxClick}
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
