import { rest } from 'msw';
import { productRepository } from '../../repositories';

const BASE_URL = '/products';

export const productsHandler = [
  // 제품 리스트
  rest.get(BASE_URL, (req, res, ctx) => {
    const productItems = productRepository.get();

    return res(ctx.status(200), ctx.json(productItems));
  }),

  // 단일 제품 조회
  rest.get(`${BASE_URL}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const productItems = productRepository.get();
    const product = productItems.find((item) => item.id === Number(id));

    return res(ctx.status(200), ctx.json(product));
  }),

];
