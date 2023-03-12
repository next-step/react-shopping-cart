import styled, { css } from 'styled-components';
import type { ImageProps } from './Image.types';
export const Image = styled.img<ImageProps>`
  ${({ src }) => css`
    src: ${src};
  `};
  ${({ width }) => css`
    width: ${width};
  `};
  ${({ height }) => css`
    height: ${height};
  `};
  ${({ alt }) => css`
    alt: ${alt};
  `};

  max-width: 100%;
`;
