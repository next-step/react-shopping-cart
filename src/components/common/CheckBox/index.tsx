import { PropsWithChildren, useState } from 'react';

type Props = {
  label?: string;
  checked?: boolean;
  onSelect?: () => void;
};

export const useCheckBox = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);
  return {
    checked,
    handleSelect: () => setChecked((prev) => !prev),
  };
};

const CheckBox = ({ checked, onSelect, label }: PropsWithChildren<Props>) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label" htmlFor="checkbox">
        <input
          className="checkbox"
          name="checkbox"
          type="checkbox"
          onClick={onSelect}
          checked={checked}
        />
        <span>{label && label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
