import { cls } from '@/utils';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg' | 'full';

const buttonSizeMap: Record<ButtonSize, string> = {
  sm: '',
  md: '',
  lg: '',
  full: '',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  text?: string;
}

function Button({ children, size = 'full', text, ...props }: PropsWithChildren<ButtonProps>) {
  const buttonSize = buttonSizeMap[size];
  return (
    <button className={cls(buttonSize, 'bg-teal-400 disabled:bg-slate-400 text-white font-bold')} {...props}>
      {text || children}
    </button>
  );
}

export default Button;
