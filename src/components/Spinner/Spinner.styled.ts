import { styled, keyframes } from '@/stitches.config';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: ' rotate(360deg)',
  },
});

export const StyledSpinner = styled('div', {
  borderRadius: '50%',
  height: '100%',
  aspectRatio: '1',
  border: '.3rem solid rgba(0,0,0, 0.5)',
  borderTopColor: 'White',
  animationName: `${spin}`,
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
});
