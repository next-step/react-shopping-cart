import { InputHTMLAttributes, ReactNode } from "react";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const NumberInput = ({ children, ...props }: NumberInputProps) => {
  return <input {...props}>{children}</input>;
};
export default NumberInput;
