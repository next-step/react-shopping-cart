import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles/theme';
import { type DividerProps } from './Divider.types';

export const HR = styled.hr<DividerProps>`
  display: block;
  width: 100%;
  border: 0;

  ${({ color = 'black' }) => css`
    background-color: ${theme.color[color]};
  `};

  ${({ height }) => css`
    height: ${height}px;
  `};
  ${({ size }) => css`
    margin: ${size}px 0;
  `};
`;

export const Wrapper = styled.div`
  margin-bottom: 35px;
`;
