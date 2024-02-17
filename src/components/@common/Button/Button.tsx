import React from 'react';
import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styles';

const Button = ({
  href,
  color = 'gray07',
  children,
  ...attributes
}: ButtonProps) => {
  return (
    <Styled.Button
      as={href ? 'a' : 'button'}
      href={href}
      color={color}
      {...attributes}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
