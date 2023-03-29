import { rest } from 'msw';
import productData from './data/products';
import { CartInfoType } from '../types';
import { cartDataStorage } from './util/storage';
import { KEY_PAGE } from '../hooks/usePagination';

const PRODUCTS_PER_PAGE_COUNT = 8;

const getProductListPerPage = rest.get('/products', (req, res, ctx) => {
  const currentPage = Number(req.url.searchParams.get(KEY_PAGE));
  const productListPerPage = productData.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE_COUNT,
    PRODUCTS_PER_PAGE_COUNT * currentPage
  );
  const totalPage = Math.ceil(productData.length / PRODUCTS_PER_PAGE_COUNT);

  return res(ctx.status(200), ctx.json({ productListPerPage, totalPage }));
});

const getProductDetail = rest.get('/products/:productId', (req, res, ctx) => {
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

const getCartsList = rest.get('/carts', (req, res, ctx) => {
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

const addToCart = rest.post('/carts', (req, res, ctx) => {
  const productInfo = req.body as CartInfoType;
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
  getProductListPerPage,
  getProductDetail,
  getCartsList,
  addToCart,
];
