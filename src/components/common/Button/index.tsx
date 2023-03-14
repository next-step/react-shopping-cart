import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

import * as S from "./button.style";

export type ButtonVariant = "text" | "outlined" | "contained";

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: ButtonVariant;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export default function Button({ children, variant = "contained", ...props }: ButtonProps) {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
}
