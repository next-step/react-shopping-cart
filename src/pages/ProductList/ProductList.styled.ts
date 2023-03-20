import { styled } from '@/stitches.config';

export const StyledProductList = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '40px',
});

export const StyledProductsContainer = styled('div', {
  width: '60%',
  minWidth: '600px',
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '20px',
  rowGap: '20px',
});
