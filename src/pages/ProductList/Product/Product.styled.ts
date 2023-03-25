import { styled } from '@/stitches.config';

export const StyledProduct = styled('div', {
  cursor: 'pointer',
  transition: 'transform .5s',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 10px rgba(50,50,50,.1)',

  '&:hover': {
    transform: 'translateY(-5%)',
    boxShadow: '0 4px 10px rgba(0,0,0,.3)',
  },
});

export const StyledProductBottom = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 5px',
  gap: '5px',
});

export const StyledCardButton = styled('button', {
  cursor: 'pointer',
});
