import React from "react";

export type CheckboxProps = {
  label?: string;
  id: number;
  handleToggle: () => void;
};

const Checkbox = ({ id, label, handleToggle }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleClick = () => {
    setChecked(!checked);
    handleToggle();
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
