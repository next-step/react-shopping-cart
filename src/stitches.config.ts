import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {},
  utils: {
    flexCenter: (value = 'row') => ({
      display: 'flex',
      flexDirection: value,
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
});
