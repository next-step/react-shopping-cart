import { styled, css } from '@/stitches.config';

const HEADER_HEIGHT = '50px';

export const HeaderWrapperOuterStyle = css({
  position: 'fixed',
  top: 0,
  height: HEADER_HEIGHT,
  backgroundColor: '#2BC1BC',
  zIndex: '9999',
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

export const StyledHeaderFake = styled('div', {
  content: 'none',
  width: '100%',
  height: HEADER_HEIGHT,
});
