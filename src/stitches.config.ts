import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      mint: 'rgb(43, 193, 188)',
    },
  },
  utils: {
    textHightLight: () => ({
      display: 'inline-block',
      position: 'relative',
      fontWeight: '700',
      fontSize: '16px',

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '8px',
        backgroundColor: '$mint',
        opacity: '0.5',
        zIndex: '-1',
      },
    }),
    flexCenter: (value: string) => ({
      display: 'flex',
      flexDirection: value || 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
});
