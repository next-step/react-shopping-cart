import { style } from '@vanilla-extract/css';

export const pageTitleContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
});

export const innerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1200,
});

export const pageTitle = style({
  fontSize: 20,
  fontWeight: 600,
});

export const divideLine = style({
  width: '100%',
  border: '2px solid black',
  marginTop: 20,
});
