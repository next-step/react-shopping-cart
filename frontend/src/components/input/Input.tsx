import { InputHTMLAttributes } from "react";

type BaseInputType = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  type: "text" | "number";
  className: string;
} & BaseInputType;

const Input = ({ type, className, value }: InputProps) => {
  return <input type={type} className={className} value={value} />;
};

export default Input;
