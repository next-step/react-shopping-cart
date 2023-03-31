import { rest } from 'msw';
import productData from './data/products';
import { CartItemType } from '../types';
import { cartDataStorage } from './util/storage';
import { KEY_PAGE } from '../hooks';
import { KEY_PRODUCT_COUNT } from '../domain/home/hooks/useProduct';

const getProductListPerPage = rest.get('/products', (req, res, ctx) => {
  const currentPage = Number(req.url.searchParams.get(KEY_PAGE));
  const productCount = Number(req.url.searchParams.get(KEY_PRODUCT_COUNT));
  const productListPerPage = productData.slice(
    (currentPage - 1) * productCount,
    productCount * currentPage
  );
  const totalPage = Math.ceil(productData.length / productCount);

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
  const cartData = cartDataStorage.get();

  return res(
    ctx.status(200),
    ctx.json({
      response: cartData,
    })
  );
});

const addItem = rest.post('/carts', (req, res, ctx) => {
  const productData = req.body as CartItemType;
  const cartData = cartDataStorage.get();
  const newCartData = [...cartData, productData];

  cartDataStorage.set(newCartData);

  console.log('현재 DB State', cartDataStorage.get());

  return res(ctx.status(200));
});

const deleteItem = rest.delete('/carts', (req, res, ctx) => {
  const selectId = req.body as number;
  const currentData = cartDataStorage.get();
  cartDataStorage.set(currentData.filter((item) => item.id !== selectId));

  console.log('현재 DB State', cartDataStorage.get());

  return res(ctx.status(200));
});

const deleteSelectItem = rest.delete('/carts', (req, res, ctx) => {
  const currentData = cartDataStorage.get();
  cartDataStorage.set(currentData.filter((item) => !item.select));

  console.log('현재 DB State', cartDataStorage.get());

  return res(ctx.status(200));
});

interface updateType {
  selectId: number;
  count: number;
}
const updateItemCount = rest.put('/carts', (req, res, ctx) => {
  const { selectId, count } = req.body as updateType;

  const currentData = cartDataStorage.get();

  cartDataStorage.set(
    currentData.map((item) => {
      if (item.id === selectId) {
        return {
          ...item,
          product: {
            ...item.product,
            totalQuantity: count,
            totalPrice: item.product.price * count,
          },
        };
      } else {
        return item;
      }
    })
  );
  console.log('현재 DB State', cartDataStorage.get());

  return res(ctx.status(200));
});

export const handlers = [
  getProductListPerPage,
  getProductDetail,
  getCartsList,
  addItem,
  deleteItem,
  deleteSelectItem,
  updateItemCount,
];
