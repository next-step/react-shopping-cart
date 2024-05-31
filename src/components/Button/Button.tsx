import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { contained, outlined, disabled as disabledStyle } from './Button.css';

interface Props extends ComponentPropsWithoutRef<'button'> {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button = ({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  className,
  children,
  onClick,
  ...props
}: PropsWithChildren<Props>) => {
  const buttonClass = classNames(
    {
      [contained({ size, color })]: variant === 'contained',
      [outlined({ size })]: variant === 'outlined',
      [disabledStyle[variant]]: disabled,
    },
    className
  );

  return (
    <button
      type='button'
      className={buttonClass}
      disabled={disabled}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
