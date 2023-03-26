import type { InputProps } from './Input.types';
import * as Styled from './Input.styled';
import { forwardRef } from 'react';

const Input = ({ children, ...attributes }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <Styled.Input {...attributes} ref={ref}>
      {children}
    </Styled.Input>
  );
};

export default forwardRef(Input);
