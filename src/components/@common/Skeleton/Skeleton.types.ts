import { CSSProperties } from 'react';

export const SkeletonVariant = {
  circular: '50%',
  rounded: '10px',
  rectangular: 'initial',
} as const;

export interface SkeletonProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];

  animation?: 'pulse' | 'wave' | false;
  variant?: keyof typeof SkeletonVariant;
}
