import type { ButtonHTMLAttributes, ElementType } from 'react';
import { theme } from 'styles/theme';

export const ButtonSize = {
  xs: '5px 10px',
  sm: '10px 15px',
  md: '15px 25px',
  lg: '25px 35px',
  xl: '30px 45px',
} as const;

export const ButtonVariant = {
  plain: '',
  outlined: '',
  solid: '',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: keyof typeof ButtonSize;
  variant: keyof typeof ButtonVariant;

  href?: string;
  color?: keyof typeof theme.color;
  fullWidth?: boolean;
}
