import { Link } from 'react-router-dom';

import { styled, css } from '@/stitches.config';

export const ModalBackgroundStyle = css({
  justifyContent: 'center !important',
});

export const StyledConfirmModal = styled('div', {
  flexCenter: 'column',
  gap: '20px',
  width: '80vw',
  minWidth: '350px',
  height: '80vh',
  minHeight: '350px',
});

export const StyledOrderList = styled('div', {
  backgroundColor: 'White',
  borderRadius: '20px',
  flex: 1,
  width: '100%',
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
