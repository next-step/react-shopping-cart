import { styled, css } from '@/stitches.config';

export const StyledCartProduct = styled('div', {
  display: 'flex',
  gap: '10px',
  width: '100%',
  height: '120px',
});

export const StyledProductImage = styled('img', {
  width: '100px',
});

export const StyledCartContent = styled('div', {
  display: 'flex',
  flex: '1',
  height: '100%',
});

export const StyledProductTitle = styled('div', {
  flex: '1',
});

export const StyledCartProductController = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: '5px',
  width: '100px',
  height: '100%',
});

export const CounterWithInputStyle = css({
  width: '70px',
  height: '50px',

  '> * ': {
    border: '1px solid black',
  },
});
