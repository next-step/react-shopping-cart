import { styled, css } from '@/stitches.config';

export const StyledProductListLoader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const StyledProductListWrapper = styled('div', {
  width: '100%',
  height: 'calc(100% - 50px)',
  overflowY: 'auto',
});

export const StyledBottomBuffer = styled('div', {
  content: 'none',
  width: '100%',
  height: '100px',
});

export const ProductListOuterStyle = css({
  marginTop: '40px',
});

export const ProductListInnerStyle = css({
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '20px',
  rowGap: '20px',
});
