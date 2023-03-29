import { ElementType, HTMLAttributes } from 'react';
import { theme } from 'styles/theme';

export const FontWeights = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 700,
  Bold: 800,
};

const buildVariant = (
  as: ElementType,
  fontWeight = FontWeights.Regular,
  fontSize = 16,
  lineHeight: number | string
) => ({
  as,
  fontWeight,
  fontSize,
  lineHeight,
});

export const variants = {
  h1: buildVariant('h1', FontWeights.Bold, 40, 1.2),
  h2: buildVariant('h2', FontWeights.Bold, 32, 1.2),
  h3: buildVariant('h3', FontWeights.Bold, 26, 1.2),
  h4: buildVariant('h4', FontWeights.Bold, 22, 1.2),
  h5: buildVariant('h5', FontWeights.SemiBold, 20, 1.2),
  body1: buildVariant('p', FontWeights.Regular, 16, 1.2),
  body2: buildVariant('p', FontWeights.Regular, 18, 1.2),
  subtitle1: buildVariant('span', FontWeights.SemiBold, 24, 1.2),
};

export interface TypographyProps
  extends HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  as?: ElementType;
  color?: keyof typeof theme.color;
  variant?: keyof typeof variants;
  lineHeight?: number;
}
