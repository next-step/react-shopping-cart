import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';

const Button = ({ children, theme = 'primary', disabled = false, ...attributes }: ButtonProps) => {
  return (
    <Styled.Button {...attributes} theme={theme} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
