import React from "react";
import StyledButton from "./StyledButton";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: "light" | "dark";
};

const Button = ({
  children,
  variant,
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element => (
  <StyledButton variant={variant} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
