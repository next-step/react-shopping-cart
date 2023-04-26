import styled from 'styled-components';
import type { InputProps } from './Input.types';

export const Input = styled.input<InputProps>`
  appearance: none;
  border: 1px solid #2ac1bc;
  border-radius: 2px;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`;
