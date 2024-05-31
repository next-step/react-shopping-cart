import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    bottom: 0,
    opacity: 0,
  },
  to: {
    bottom: 30,
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    bottom: 30,
    opacity: 1,
  },
  to: {
    bottom: 0,
    opacity: 0,
  },
});

export const snackbarContainer = style({
  display: 'none',
  visibility: 'hidden',
  minWidth: 180,
  minHeight: 30,
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  borderRadius: 20,
  padding: 16,
  position: 'fixed',
  zIndex: 1,
  left: '50%',
  bottom: 30,
  transform: 'translateX(-50%)',
});

export const snackbarShow = style({
  display: 'block',
  visibility: 'visible',
  WebkitAnimation: `${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s`,
  animation: `${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s`,
});
