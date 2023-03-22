import { PropsWithChildren } from 'react';
import './index.module.css';

type Props = {
  size?: 'small' | '';
};

const Button = ({ size = '', children }: PropsWithChildren<Props>) => {
  return (
    <button className={`primary-button${size && '-' + size}`}>
      {children}
    </button>
  );
};

export default Button;
