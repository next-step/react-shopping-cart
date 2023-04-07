import { styled, keyframes } from '@/stitches.config';

const fadeOut = keyframes({
  '0%': {
    opacity: '1',
  },
  '100%': {
    opacity: '0',
  },
});

export const StyledFadeOut = styled('div', {
  animationName: `${fadeOut}`,
  animationDuration: '1s',
  animationDelay: '1s',
});
