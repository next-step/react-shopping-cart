import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type DividerProps } from './Divider.types';

export const HR = styled.hr<DividerProps>`
  display: block;
  width: 100%;
  border: 0;

  ${({ theme, color = 'black' }) => css`
    background-color: ${theme.color[color]};
  `};

  ${({ height }) => css`
    height: ${height}px;
  `};
  ${({ size }) => css`
    margin: ${size}px 0;
  `};
`;
