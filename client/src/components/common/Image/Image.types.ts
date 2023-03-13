import type { HTMLAttributes } from 'react';
import type { CSSProperties } from 'styled-components';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  alt?: string;
}
