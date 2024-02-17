import { Link } from 'react-router-dom';

import { styled, css } from '@/stitches.config';

export const StyledOrder = styled('div', {
  marginTop: '20px',
});

export const StyledOrderHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  paddingLeft: '20px',
  paddingRight: '20px',
  backgroundColor: '$asphalt',
  fontSize: '16px',
  fontWeight: 'bold',
});

const CartButtonStyle = {
  width: 'max-content',
  height: 'fit-content',
  padding: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
  borderRadius: '10px',
  color: 'White',
  textAlign: 'center',
  fontSize: '16px',
  backgroundColor: '$mint',
};

export const StyledCartButton = styled('button', CartButtonStyle);

export const OrderStyle = css({
  padding: '15px',
  paddingTop: '25px',
  paddingBottom: '25px',
  backgroundColor: 'White',
  boxSizing: 'border-box',
  borderTop: '1px solid $ghostGray',
});

export const StyledToCartButton = styled(Link, {
  ...CartButtonStyle,
  fontSize: '25px',
});
