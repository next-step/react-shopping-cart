import './index.module.css';

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export const ButtonType = {
  primary: 'primary-button',
  outline: 'delete-button',
  number: 'number-input-button',
};

interface Props extends ComponentPropsWithoutRef<'button'> {
  size?: 'small' | '';
  theme?: keyof typeof ButtonType;
  className?: string;
}

const Button = ({
  size = '',
  theme = 'primary',
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const classType = ButtonType[theme] + `${size && '-' + size}`;
  return (
    <button
      {...props}
      className={`${className ? className : classType} flex-center`}
    >
      {children}
    </button>
  );
};

export default Button;
