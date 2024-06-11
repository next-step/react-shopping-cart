import { ButtonHTMLAttributes, ReactNode } from "react";

interface NumberIncrementStepperProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const NumberIncrementStepper = ({
  children,
  ...props
}: NumberIncrementStepperProps) => {
  return <button {...props}>{children}</button>;
};

export default NumberIncrementStepper;
