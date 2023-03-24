import type { InputProps } from './Input.types';
import * as Styled from './Input.styled';

const Input = ({ children, ...attributes }: InputProps) => {
  return <Styled.Input {...attributes}>{children}</Styled.Input>;
};

export default Input;
