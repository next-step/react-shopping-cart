import { styled } from '@/stitches.config';

export const StyledOrderListLoader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const StyledOrderList = styled('div', {
  width: '100%',
  minHeight: 'calc(100% - 50px)',
  paddingBottom: '80px',
  backgroundColor: '$ghostGray',
  boxSizing: 'border-box',
});
