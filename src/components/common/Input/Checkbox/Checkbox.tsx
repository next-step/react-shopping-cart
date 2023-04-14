/* eslint-disable no-console */
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export type CheckboxProps = {
  label?: string;
  id: number;
};

const Checkbox = ({ id, label }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={checked}
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
