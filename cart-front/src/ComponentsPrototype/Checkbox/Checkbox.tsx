import { HTMLAttributes, ReactNode } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  flag: boolean;
}

const CheckBox = ({ children, flag, ...props }: CheckBoxProps) => {
  return (
    <label>
      <input type="checkbox" disabled={flag} {...props} />
      {children}
    </label>
  );
};
export default CheckBox;
