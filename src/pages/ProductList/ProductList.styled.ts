import { css } from '@/stitches.config';

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
