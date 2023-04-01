import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { type SkeletonProps, SkeletonVariant } from './Skeleton.types';

const DEFAULT_SIZE = 10;

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Wrapper = styled.span<SkeletonProps>`
  display: block;
  background-color: ${({ theme }) => theme.color.gray03};
  border-radius: ${({ variant = 'rectangular' }) => SkeletonVariant[variant]};

  width: ${({ width = DEFAULT_SIZE }) =>
    Number.isInteger(width) ? `${width}px` : width};
  height: ${({ height = DEFAULT_SIZE }) =>
    Number.isInteger(height) ? `${height}px` : height};

  ${({ animation }) =>
    animation === 'pulse' &&
    css`
      animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
    `};

  ${({ theme, animation }) =>
    animation === 'wave' &&
    css`
      position: relative;
      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${theme.color.gray03},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%);
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `}
`;
