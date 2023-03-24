import React from "react";

export type CheckboxProps = {
  label?: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!checked);
    console.log(checked);
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
