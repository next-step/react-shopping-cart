import type { HTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  theme: 'primary' | 'brown';
}
