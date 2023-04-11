import React, { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  className: string;
  onClick?: () => void;
}>;

const Button = ({ children, className, onClick }: ButtonProps): JSX.Element => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
