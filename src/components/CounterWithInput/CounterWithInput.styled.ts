import { styled } from '@/stitches.config';

export const StyledCounterWithInput = styled('div', {
  display: 'flex',
  maxWidth: '300px',
  maxHeight: '300px',
  boxSizing: 'border-box',
});

export const StyledInput = styled('input', {
  width: '70%',
  borderRight: 'none',
  boxSizing: 'border-box',
  textAlign: 'center',
});

export const StyledCounterController = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30%',

  '> :not(:first-child)': {
    borderTop: 'inherit',
    boxSizing: 'border-box',
  },

  '> * ': {
    cursor: 'pointer',
  },
});
