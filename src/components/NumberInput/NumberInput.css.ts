import { style } from '@vanilla-extract/css';

export const numberInputContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const numberInput = style({
  width: 60,
  height: 50,
  border: '1px solid #dddddd',
  textAlign: 'center',
  fontSize: 20,
});

export const numberInputButton = style({
  width: 30,
  height: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #dddddd',
  cursor: 'pointer',

  ':focus': {
    outline: 'none',
  },
});
