import { rest } from 'msw';
import productData from './data/products';
import { CartItemType } from '../types';
import { cartDataStorage } from './util/storage';
import { KEY_PAGE } from '../hooks';
import { KEY_PRODUCT_COUNT } from '../domain/home/hooks/useProduct';
import { SelectIdArr, SelectIdType } from '../apiClient';
import { COUNT_TYPE } from '../constant';

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

  return res(ctx.status(200));
});

const deleteItem = rest.delete('/carts', (req, res, ctx) => {
  const { selectId } = req.body as SelectIdType;
  const currentData = cartDataStorage.get();
  cartDataStorage.set(currentData.filter((item) => item.id !== selectId));

  return res(ctx.status(200));
});

const deleteSelectItem = rest.delete('/carts/select', (req, res, ctx) => {
  const selectedProductsId = new Set(req.body as SelectIdArr);
  const currentData = cartDataStorage.get();
  cartDataStorage.set(
    currentData.filter((item) => !selectedProductsId.has(item.id))
  );

  return res(ctx.status(200));
});

export interface UpdateType {
  selectId: number;
  type: 'UP' | 'DOWN';
}
const updateItemCount = rest.put('/carts/count', (req, res, ctx) => {
  const { selectId, type } = req.body as UpdateType;
  const currentData = cartDataStorage.get();
  const countValue = type === COUNT_TYPE.UP ? +1 : -1;
  cartDataStorage.set(
    currentData.map((item) => {
      if (item.id === selectId) {
        return {
          ...item,
          product: {
            ...item.product,
            totalQuantity: item.product.totalQuantity + countValue,
            totalPrice:
              item.product.price * (item.product.totalQuantity + countValue),
          },
        };
      } else {
        return item;
      }
    })
  );

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
