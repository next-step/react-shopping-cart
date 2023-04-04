import type { HTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'primary' | 'brown';
}
