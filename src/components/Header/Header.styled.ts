import { styled, css } from '@/stitches.config';

export const HeaderWrapperOuterStyle = css({
  height: '50px',
  backgroundColor: '#2BC1BC',
});

export const HeaderWrapperInnerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
});

export const StyledGNBTitle = styled('span', {
  fontSize: '25px',
  fontWeight: 'bold',
  marginLeft: '10px',
});

export const StyledButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});
