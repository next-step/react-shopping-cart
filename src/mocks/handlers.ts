import { rest } from 'msw';
import productData from './data/products';

// console.log(products);
export const handlers = [
  // GET product list
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        productsList: productData,
      })
    );
  }),
  // GET product detail
  rest.get('/detail/:productId', (req, res, ctx) => {
    const { productId } = req.params;
    const productDetailData = productData.filter(
      (item) => item.id === Number(productId)
    )[0];

    return res(
      ctx.status(200),
      ctx.json({
        productDetail: productDetailData,
      })
    );
  }),
];
