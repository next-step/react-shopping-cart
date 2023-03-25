import { styled } from '@/stitches.config';

export const StyledThreeLayeredFrame = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const StyledTitleSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '3em',
});

export const StyledHR = styled('hr', {
  width: '100%',
  height: '3px',
  backgroundColor: 'black',
  padding: 'none',
});

export const StyledBodySection = styled('div', {
  padding: 'inherit',
  flex: 1,
});

export const StyledBottomSection = styled('div', {
  padding: 'inherit',
});
