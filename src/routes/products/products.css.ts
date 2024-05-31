import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const productContainer = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);

export const productDetailContainer = style([
  sprinkles({
    flexDirection: {
      desktop: 'row',
      tablet: 'row',
      mobile: 'column',
    },
    gap: {
      desktop: '60px',
      tablet: '60px',
      mobile: '15px',
    },
  }),
  {
    display: 'flex',
    marginTop: 130,
    width: '100%',
    maxWidth: 1200,
    padding: 30,
  },
]);

export const productDetailLeftSection = style([
  {
    width: '100%',
  },
]);

export const productDetailRightSection = style([
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
]);

export const productDetailInfo = style({
  width: '100%',
  marginBottom: 20,
});

export const productDetailInfoName = style({
  fontSize: 20,
});

export const productDetailPriceBox = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const productDetailInfoPrice = style({
  fontSize: 20,
});

export const productDetailButton = style({
  width: '100%',
  padding: 24,
  background: '#73675c',
  fontSize: 20,
  color: 'white',
});

export const productImage = style({
  width: '100%',
  height: '100%',
});

export const productDivideLine = style({
  width: '100%',
  border: '2px solid #aaaaaa',
  marginTop: 20,
  marginBottom: 20,
});

export const addCartButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 'large',
});

export const productInfo = style({
  display: 'flex',
  flexDirection: 'column',
});

export const productInfoName = style({
  fontSize: 12,
});

export const productListCard = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '280px',
  padding: 'small',
});
