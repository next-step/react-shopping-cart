import { MouseEvent } from "react";

type CheckBoxProps = {
  checked: boolean;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
};

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="checkbox"
      name="checkbox"
      checked={checked}
      onClick={onClick}
    />
  );
};

export default CheckBox;
