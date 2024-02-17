import { css, styled } from '@/stitches.config';

export const StyledCounterWithInput = styled('div', {
  position: 'relative',
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

export const CounterErrorMessageStyle = css({
  position: 'absolute',
  top: '-100%',
  right: '0',
  width: 'max-content',
  padding: '10px',
  border: 'none',
  backgroundColor: 'Wheat',
  fontSize: '13px',
  fontWeight: 'bold',
  color: 'DarkRed',
  borderRadius: '10px',
  boxShadow: '0 0 5px rgba(0,0,0, .5)',
});
