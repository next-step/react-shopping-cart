import type { HTMLAttributes, ElementType, CSSProperties } from 'react';

export type GridProps = {
  as?: ElementType;
  display?: CSSProperties['display'];
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  gap?: CSSProperties['gap'];
} & HTMLAttributes<HTMLDivElement>;
