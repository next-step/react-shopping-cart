import { styled, css } from '@/stitches.config';

export const CartSidePanelStyle = css({
  position: 'sticky',
  top: '50px',
  width: '280px',
  height: '230px',
  marginTop: '50px',
  border: '1px solid rgba(0,0,0,.1)',
});

export const StyledTotalPrice = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  marginTop: '20px',
});

export const StyledSubmitButton = styled('button', {
  flexCenter: '',
  flex: 1,
  gap: '5px',
  width: '100%',
  height: '80px',
  borderRadius: '10px',
  backgroundColor: '$mint',
  color: 'White',

  variants: {
    disable: {
      true: {
        opacity: '0.6',
      },
    },
  },
});
