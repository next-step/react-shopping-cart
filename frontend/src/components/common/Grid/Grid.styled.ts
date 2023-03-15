import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { GridProps } from './Grid.types';

export const Grid = styled.div<GridProps>`
  ${({ display }) => css`
    display: ${display};
  `};
  ${({ gridTemplateColumns }) => css`
    grid-template-columns: ${gridTemplateColumns};
  `}

  ${({ gap }) => css`
    gap: ${gap};
  `}
`;
