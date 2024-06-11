import { ButtonHTMLAttributes, ReactNode } from "react";

interface NumberDecrementStepperProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const NumberDecrementStepper = ({
  children,
  ...props
}: NumberDecrementStepperProps) => {
  return <button {...props}>{children}</button>;
};

export default NumberDecrementStepper;
