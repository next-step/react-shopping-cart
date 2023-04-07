import { Link } from 'react-router-dom';
import { styled, css } from '@/stitches.config';

export const PaymentModalStyle = css({
  border: 'none !important',
  height: 'fit-content !important',
});

export const StyledPaymentModal = styled('div', {
  backgroundColor: 'White',
  borderRadius: '10px',
  padding: '10px',
});

export const StyledModalBottomContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '20px',
});

export const StyledPaymentButtonWrapper = styled('div', {
  flexCenter: '',
  width: '100%',
  height: '100px',
  padding: '10px',
});

export const StyledPaymentButton = styled(Link, {
  flexCenter: '',
  width: '200px',
  height: '100%',
  borderRadius: '10px',
  backgroundColor: '$mint',
  fontWeight: 'bold',
});
