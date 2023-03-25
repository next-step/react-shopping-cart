import { styled } from '@/stitches.config';

export const StyledOrder = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
});

export const StyledOrderImage = styled('img', {
  width: '120px',
  height: '120px',
});

export const StyledProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  flex: 1,
});

export const StyledInfoContainer = styled('div', {
  color: 'rgba(0,0,0,.5)',
});
