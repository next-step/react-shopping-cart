import { style } from '@vanilla-extract/css';

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const checkbox = style({
  appearance: 'none',
  border: '1px solid #2ac1bc',
  borderRadius: 2,
  width: '1.75rem',
  height: '1.75rem',
  cursor: 'pointer',

  ':focus': {
    outline: 'none',
  },

  ':checked': {
    backgroundColor: '#2ac1bc',
  },

  ':after': {
    content: '✔',
    width: '100%',
    height: '100%',
    fontSize: '0.5rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const checkboxLabel = style({
  paddingLeft: 7,
});
