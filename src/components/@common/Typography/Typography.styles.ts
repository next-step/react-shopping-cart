import styled from '@emotion/styled';
import { TypographyProps, variants } from './Typography.types';

export const Typography = styled.span<TypographyProps>`
  color: ${({ theme, color = 'black' }) => theme.color[color]};

  height: ${({ variant = 'body1', height }) =>
    height || `${variants[variant].fontSize}px`};
  line-height: ${({ variant = 'body1', lineHeight }) =>
    lineHeight || variants[variant].lineHeight};

  font-size: ${({ variant = 'body1' }) => variants[variant].fontSize}px;
  font-weight: ${({ variant = 'body1' }) => variants[variant].fontWeight};
`;
