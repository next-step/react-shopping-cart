import { style } from '@vanilla-extract/css';

export const navContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px',
  width: '100%',
  minWidth: 375,
  height: 80,
  background: '#2ac1bc',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
  position: 'fixed',
  top: 0,
  zIndex: 10,
});

export const innerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1200,
});

export const navTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const navTitle = style({
  fontSize: 24,
  fontWeight: 900,
  textAlign: 'center',
  verticalAlign: 'middle',
  color: '#ffffff',
  cursor: 'pointer',
});

export const navMenu = style({
  display: 'flex',
  gap: '15px',
});

export const navButton = style({
  fontWeight: 500,
  fontSize: 16,
  color: '#ffffff',
  cursor: 'pointer',
});
