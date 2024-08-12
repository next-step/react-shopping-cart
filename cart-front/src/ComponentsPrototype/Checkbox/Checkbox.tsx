import { HTMLAttributes, ReactNode, useState, useEffect } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  flag: boolean;
  handleChange: () => void;
}

const CheckBox = ({
  children,
  flag,
  handleChange,
  ...props
}: CheckBoxProps) => {
  const [check, setCheck] = useState(flag);

  useEffect(() => {
    setCheck(flag);
  }, [flag]);

  const handleCheckChange = () => {
    setCheck(!check);
    handleChange();
  };

  return (
    <label className="pl-2">
      <input
        className="appearance:none rounded-sm w-8 h-8 cursor-pointer 
            focus:outline-none appearance-none 
            cursor:pointer checked:bg-customTeal
            after:content-['✔'] w-8 h-8 text-xs text-[#ad7373] flex justify-center items-center appearance-none
          "
        type="checkbox"
        checked={check}
        onChange={() => {
          handleCheckChange();
        }}
        {...props}
      />
      {children}
    </label>
  );
};
export default CheckBox;
