import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const contained = recipe({
  base: {
    color: 'white',
    cursor: 'pointer',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '#2ac1bc',
      },
      secondary: {
        backgroundColor: '#73675c',
      },
    },
    size: {
      small: {
        fontSize: 20,
        padding: '14px 28px',
      },
      medium: {
        width: '100%',
        fontSize: 24,
        padding: 20,
      },
    },
  },
});

export const outlined = recipe({
  base: {
    border: '1px solid #bbbbbb',
    padding: '12px 22px',
    cursor: 'pointer',
  },
  variants: {
    size: {
      small: {},
      medium: {
        fontSize: 24,
      },
    },
  },
});

export const disabled = styleVariants({
  contained: {
    color: 'rgba(0, 0, 0, 0.26)',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    cursor: 'not-allowed',
  },
  outlined: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'not-allowed',
  },
});
