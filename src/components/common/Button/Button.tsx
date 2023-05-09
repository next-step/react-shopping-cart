import React, { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  className: string;
  paren?: number;
  onClick?: any; // TODO: Button component onClick prop type에 대한 고민 필요
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
