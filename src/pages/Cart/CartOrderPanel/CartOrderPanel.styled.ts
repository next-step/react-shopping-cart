import { Link } from 'react-router-dom';

import { styled } from '@/stitches.config';

export const StyledConfirmModal = styled('div', {
  flexCenter: 'column',
  gap: '20px',
  width: '80vw',
  minWidth: '350px',
  height: '80vh',
  minHeight: '350px',
  boxSizing: 'border-box',
});

export const StyledOrderList = styled('div', {
  flex: 1,
  width: '100%',
  padding: '30px',
  backgroundColor: 'White',
  borderRadius: '20px',
  overflowY: 'auto',
});

export const StyledOrderButton = styled(Link, {
  flexCenter: '',
  width: '350px',
  height: '100px',
  backgroundColor: '$mint',
  borderRadius: '10px',
  color: 'White',
  fontWeight: 'bold',
});
