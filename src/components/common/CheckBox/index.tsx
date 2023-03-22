import { PropsWithChildren, useState } from 'react';

type Props = {
  label?: string;
  checked?: boolean;
  onClick?: () => void;
};

export const useCheckBox = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);
  return {
    checked,
    toggleCheck: () => setChecked((prev) => !prev),
  };
};

const CheckBox = ({ checked, onClick, label }: PropsWithChildren<Props>) => {
  return (
    <div className="checkbox-container" onClick={onClick}>
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        readOnly
        checked={checked}
      />
      {label && (
        <label className="checkbox-label" htmlFor="checkbox">
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
