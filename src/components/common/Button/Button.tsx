import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  dataTestid: string;
};

const Button = ({
  children,
  className,
  onClick,
  dataTestid,
}: ButtonProps): JSX.Element => (
  <button className={className} onClick={onClick} data-testid={dataTestid}>
    {children}
  </button>
);

export default Button;
