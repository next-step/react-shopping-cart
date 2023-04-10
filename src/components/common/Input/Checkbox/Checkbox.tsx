import React from "react";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../../../../store/cartSlice";

export type CheckboxProps = {
  label?: string;
  id: number;
};

const Checkbox = ({ id, label }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setChecked(!checked);
    dispatch(toggleCheck(id));
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
