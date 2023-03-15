import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';

const Button = ({ children, ...attributes }: ButtonProps) => {
  return <Styled.Button {...attributes}>{children}</Styled.Button>;
};

export default Button;
