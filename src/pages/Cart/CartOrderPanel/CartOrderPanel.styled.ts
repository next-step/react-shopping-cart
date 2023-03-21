import { styled } from '@/stitches.config';

export const StyledCartOrderPanel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '280px',
  height: '230px',
  marginTop: '50px',
  border: '1px solid rgba(0,0,0,.1)',
});

export const StyledCartOrderPanelHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '3em',
  borderBottom: '2px solid rgba(0,0,0,.2)',
  paddingLeft: '1em',
});

export const StyledCartOrderPanelBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '20px',
});

export const StyledTotalPrice = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  flex: 1,
});

export const StyledPriceSpan = styled('span', {
  textHightLight: '',
  height: 'fit-content',
});

export const StyledOrderButton = styled('button', {
  flexCenter: '',
  flex: 1,
  gap: '5px',
  height: '80px',
  backgroundColor: '$mint',
  color: 'White',
});
