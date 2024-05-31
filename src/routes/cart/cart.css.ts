import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const cartSectionContainer = style({
  marginTop: 110,
});

export const cartInnerContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const cartSection = style([
  { width: '100%', maxWidth: 1200 },
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
]);

export const cartLeftSection = style([
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
    marginTop: 50,
    '@media': {
      'screen and (max-width: 768px)': {
        paddingBottom: 240,
      },
    },
  },
]);

export const cartRightSection = style([
  sprinkles({
    width: {
      desktop: '35%',
      tablet: '100%',
      mobile: '100%',
    },
    height: {
      desktop: '260px',
      tablet: 'auto',
      mobile: 'auto',
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
    backgroundColor: '#ffffff',
    marginTop: 80,
    border: '1px solid #dddddd',
  },
]);

export const cartRightSectionTop = style({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 30px',
});

export const cartTitle = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
});

export const cartContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const cartTrashSvg = style({
  alignSelf: 'flex-end',
  cursor: 'pointer',
});

export const cartItemImage = style({
  maxWidth: 144,
  maxHeight: 144,
});

export const cartName = style({
  fontSize: 18,
});

export const cartItemLeftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  marginTop: 10,
});

export const cartItemRightSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
});

export const cartPrice = style({
  color: '#333333',
  alignSelf: 'flex-end',
});

export const cartItemCheck = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
});

export const cartDivideLine = style({
  width: '100%',
  border: '2px solid #aaaaaa',
});

export const cartDivideLineThin = style({
  width: '100%',
  border: '1px solid #aaaaaa',
});

export const highlightTextContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 20,
  marginTop: 20,
});

export const orderButtonContainer = style([
  sprinkles({
    marginLeft: {
      desktop: 'medium',
      tablet: 'none',
      mobile: 'none',
    },
    marginRight: {
      desktop: 'medium',
      tablet: 'none',
      mobile: 'none',
    },
  }),
  {
    justifyContent: 'center',
    marginTop: 30,
  },
]);

export const orderButton = style({ display: 'flex', justifyContent: 'center' });

export const emptyCartContainer = style({
  marginTop: '30%',
});
