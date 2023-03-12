import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';

const Button = ({ className, children }: ButtonProps) => {
  return <Styled.Button className={className}>{children}</Styled.Button>;
};

export default Button;
