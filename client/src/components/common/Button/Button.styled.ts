import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;

  ${({ disabled }) =>
    disabled === true
      ? css`
          opacity: 0.5;
          pointer-events: none;
        `
      : css`
          opacity: 1;
        `}

  ${({ theme }) =>
    theme === 'primary'
      ? css`
          background: #2ac1bc;
          color: white;
        `
      : css`
          background: #73675c;
          color: white;
        `}
`;
