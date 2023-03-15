import { rest } from 'msw';
import productData from './data/products';

export const handlers = [
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
];
