import { PropsWithChildren, useId, useState } from 'react';

export interface CheckboxProps {
  isChecked?: boolean;
  defaultIsChecked?: boolean;
  name?: string;
}

function Checkbox({
  isChecked: isCheckedProp,
  defaultIsChecked,
  name,
  children,
}: PropsWithChildren<CheckboxProps>) {
  const [isCheckedState, setIsCheckedState] = useState(defaultIsChecked ?? false);
  const isChecked = isCheckedProp !== undefined ? isCheckedProp : isCheckedState;
  const id = useId();

  const handleClickCheckbox = () => {
    setIsCheckedState((prevState) => !prevState);
  };

  return (
    <div className="checkbox-container">
      <input
        id={id}
        className="checkbox"
        name={name}
        type="checkbox"
        checked={isChecked}
        onClick={handleClickCheckbox}
      />
      <label className="checkbox-label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
