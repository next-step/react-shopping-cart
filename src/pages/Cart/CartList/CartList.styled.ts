import { styled } from '@/stitches.config';

export const StyledCartList = styled('section', {
  width: '60%',
  marginTop: '30px',
});

export const StyledCartListHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const StyledCartCounter = styled('div', {
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '3px solid gray',
  gap: '5px',
});

export const StyledCartContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '10px',
});
