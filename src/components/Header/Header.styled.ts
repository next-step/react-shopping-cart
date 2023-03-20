import { styled } from '@/stitches.config';

// TODO: 내부 내용물을 채우는 width는 content div와 연계되어있음. 따라서 공통 설정 필요.
export const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '50px',
  backgroundColor: '#2BC1BC',
});

export const StyledHeaderContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '60%',
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
