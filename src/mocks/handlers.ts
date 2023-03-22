import { rest } from 'msw';
import productData from './data/products';
import { cartData } from './data/carts';

export const handlers = [
  /** 상품 */
  // [GET] 상품 목록 조회
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        response: productData,
      })
    );
  }),

  // [GET] 상품 단일 조회
  rest.get('/products/:productId', (req, res, ctx) => {
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
  }),

  /** 장바구니*/
  // [GET] 장바구니 아이템 목록 조회
  rest.get('/carts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        response: cartData,
      })
    );
  }),

  // [POST] 장바구니 아이템 추가
  rest.post('/carts', (req, res, ctx) => {
    const product = req.body;
    const cartData = window.localStorage.getItem('cartData');

    if (cartData) {
      const tempCart = JSON.parse(cartData);
      const newCart = [...tempCart, product];
      window.localStorage.setItem('cartData', JSON.stringify(newCart));
    } else {
      const newCart = [product];
      window.localStorage.setItem('cartData', JSON.stringify(newCart));
    }

    return res(
      ctx.status(200)
      // ctx.json({
      //   response: cartData,
      // })
    );
  }),
];
