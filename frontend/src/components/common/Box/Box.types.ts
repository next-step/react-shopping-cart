import type { HTMLAttributes, ElementType, CSSProperties } from 'react';

export type BoxProps = {
  as?: ElementType;

  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
} & HTMLAttributes<HTMLDivElement>;
