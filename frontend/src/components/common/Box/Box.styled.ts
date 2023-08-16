import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BoxProps } from '@/components/common/Box/Box';

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
  ${({ gridTemplateColumns }) => css`
    grid-template-columns: ${gridTemplateColumns};
  `}
  ${({ gap }) => css`
    gap: ${gap};
  `}
`;
