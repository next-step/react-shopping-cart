import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const orderSectionContainer = style({
  marginTop: 110,
});

export const orderSection = style([
  sprinkles({
    display: 'flex',
    justifyContent: {
      desktop: 'space-between',
      tablet: 'space-between',
      mobile: 'space-between',
    },
    flexDirection: {
      desktop: 'row',
      tablet: 'column',
      mobile: 'column',
    },
    paddingX: {
      desktop: 'large',
      tablet: 'none',
      mobile: 'none',
    },
  }),
  {
    width: '100%',
    maxWidth: 1200,
  },
]);

export const orderContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const orderInfoContainer = style({
  display: 'flex',
  gap: '15px',
  marginTop: 10,
});

export const orderItemInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const orderTotalPrice = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 20,
  marginTop: 20,
});

export const orderTitle = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
});

export const orderName = style({
  fontSize: 18,
});

export const orderInfo = style({
  color: '#888888',
});

export const orderContentSection = style({
  display: 'flex',
  justifyContent: 'center',
});

export const orderLeftSection = style([
  sprinkles({
    width: {
      desktop: '60%',
      tablet: '100%',
      mobile: '100%',
    },
    paddingLeft: {
      desktop: 'none',
      tablet: 'large',
      mobile: 'large',
    },
    paddingRight: {
      desktop: 'none',
      tablet: 'large',
      mobile: 'large',
    },
  }),
  {
    '@media': {
      'screen and (max-width: 768px)': {
        paddingBottom: 240,
      },
    },
    marginTop: 50,
  },
]);

export const orderRightSection = style([
  sprinkles({
    width: {
      desktop: '35%',
      tablet: '100%',
      mobile: '100%',
    },
    position: {
      desktop: 'static',
      tablet: 'fixed',
      mobile: 'fixed',
    },
    bottom: {
      desktop: 'auto',
      tablet: 0,
      mobile: 0,
    },
  }),
  {
    height: 230,
    backgroundColor: '#ffffff',
    marginTop: 80,
    border: '1px solid #dddddd',
  },
]);

export const orderRightSectionTop = style({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 30px',
});

export const orderList = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const orderListHeader = style({
  width: '100%',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 50,
  fontSize: 20,
  background: '#f6f6f6',
  border: '1px solid #aaaaaa',
});

export const orderListItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '10px 20px',
  border: '1px solid #aaaaaa',
});

export const orderDetailContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '50px 0',
});

export const orderDetailTitle = style({
  fontSize: 24,
});

export const orderDivideLine = style({
  width: '100%',
  border: '2px solid #aaaaaa',
});

export const orderDivideThinLine = style({
  width: '100%',
  border: '1px solid #aaaaaa',
});

export const orderDetailPriceContainer = style({
  display: 'flex',
  gap: 15,
  marginTop: 10,
});

export const orderButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 30,
});

export const orderItemImage = style({ width: 144, height: 144 });

export const orderButton = style({
  display: 'flex',
  justifyContent: 'center',
});

export const innerContainer = style([
  sprinkles({
    paddingX: {
      desktop: 'none',
      tablet: 'large',
      mobile: 'large',
    },
  }),
  {
    maxWidth: 1200,
    width: '100%',
  },
]);

export const orderTotalPriceText = style({
  width: 480,
});

export const emptyOrderContainer = style({
  marginTop: '30%',
});
