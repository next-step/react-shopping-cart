import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

import type { ButtonVariant } from "./button.style";
import * as S from "./button.style";

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
