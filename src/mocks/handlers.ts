import { rest } from 'msw';
import productData from './data/products';
import { CartItemType } from '../types';
import { cartDataStorage } from './util/storage';

const fetchProductData = rest.get('/products', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      response: productData,
    })
  );
});

const fetchProductDetail = rest.get('/products/:productId', (req, res, ctx) => {
  const { productId } = req.params;
  const productDetailData = productData.filter(
    (item) => item.id === Number(productId)
  )[0];

  return res(
    ctx.status(200),
    ctx.json({
      response: productDetailData,
    })
  );
});

const fetchCartsData = rest.get('/carts', (req, res, ctx) => {
  const cartData = window.localStorage.getItem('cartData');
  let responseData = [];
  if (cartData) {
    responseData = JSON.parse(cartData);
  }

  return res(
    ctx.status(200),
    ctx.json({
      response: responseData,
    })
  );
});

const updateCartData = rest.post('/carts', (req, res, ctx) => {
  const productInfo = req.body as CartItemType;
  const cartData = cartDataStorage.get();
  if (cartData) {
    const currentCartData = JSON.parse(cartData);
    const newCartData = [...currentCartData, productInfo];
    cartDataStorage.set(newCartData);
  } else {
    const newCartData = [productInfo];
    cartDataStorage.set(newCartData);
  }

  return res(ctx.status(200));
});

export const handlers = [
  fetchProductData,
  fetchProductDetail,
  fetchCartsData,
  updateCartData,
];
