import styled, { css } from 'styled-components';
import type { BoxProps } from './Box.types';

export const Box = styled.div<BoxProps>`
  ${({ display }) => css`
    display: ${display};
  `};
  ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
  `}
  ${({ justifyContent }) => css`
    justify-content: ${justifyContent};
  `}
  ${({ alignItems }) => css`
    align-items: ${alignItems};
  `}
`;
