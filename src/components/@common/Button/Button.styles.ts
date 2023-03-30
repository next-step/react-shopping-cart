import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ButtonProps, ButtonSize } from './Button.types';

export const Button = styled.button<ButtonProps>`
  border-radius: 10px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ size }) => css`
    padding: ${ButtonSize[size]};
  `}

  ${({ theme, color = 'gray07', variant }) =>
    variant === 'outlined'
      ? css`
          color: ${theme.color[color]};
          border: 1px solid ${theme.color[color]};
        `
      : variant === 'solid'
      ? css`
          color: ${theme.color.white};
          background-color: ${theme.color[color]};
        `
      : css`
          background-color: transparent;
        `}

  &:disabled {
    color: ${({ theme }) => theme.color.gray05};
    background-color: ${({ theme }) => theme.color.gray03};
  }
`;
