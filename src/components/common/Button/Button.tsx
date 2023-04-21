import React, { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  className: string;
  paren?: number;
  onClick?: () => void;
}>;

const Button = ({
  children,
  className,
  paren,
  onClick,
}: ButtonProps): JSX.Element => (
  <button className={className} onClick={onClick}>
    {children}
    {paren && `(${paren})`}
  </button>
);

export default Button;
