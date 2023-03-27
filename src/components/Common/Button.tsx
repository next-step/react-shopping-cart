import { cls } from '@/utils';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

const buttonSizeMap: Record<ButtonSize, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-3 px-6',
};

type ButtonVariant = 'primary' | 'info' | 'disabled' | 'danger';

const buttonVariantMap: Record<ButtonVariant, string> = {
  primary: 'bg-teal-400 text-white active:bg-teal-300',
  info: 'bg-white border-[1px] border-slate-400 text-slate-400 active:border-slate-300 active:text-slate-300',
  disabled: 'bg-slate-300 text-white cursor-not-allowed',
  danger: 'bg-red-400 text-white active:bg-red-300',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant: ButtonVariant;
  isFullWidth?: boolean;
}

function Button({ children, variant, size, isFullWidth, ...props }: PropsWithChildren<ButtonProps>) {
  const buttonSize = buttonSizeMap[size];
  const buttonVariant = buttonVariantMap[variant];
  const widthFull = isFullWidth ? 'w-full' : '';

  return (
    <button className={cls(buttonSize, buttonVariant, widthFull, 'font-semibold py-2 px-4 rounded-md')} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
};

export default Button;
