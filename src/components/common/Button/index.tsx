import { PropsWithChildren } from 'react';
import './index.module.css';

export const ButtonType = {
  primary: 'primary-button',
  outline: 'delete-button',
  number: 'number-input-button',
};

type Props = {
  size?: 'small' | '';
  type?: keyof typeof ButtonType;
  className?: string;
};

const Button = ({
  size = '',
  type = 'primary',
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const classType = ButtonType[type] + `${size && '-' + size}`;
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
