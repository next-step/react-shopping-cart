import { rest } from 'msw';

import { products } from '@/mocks/data/product';

const getPaginatedAllProducts: Parameters<typeof rest.get>[1] = (
  req,
  res,
  ctx
) => {
  const { searchParams } = req.url;
  const page = Number(searchParams.get('_page'));
  const limit = Number(searchParams.get('_limit'));
  const totalCount = products.length;
  const totalPages = Math.round(totalCount / limit);

  return res(
    ctx.delay(3000),
    ctx.status(200),
    ctx.json([...products.slice(page * limit, (page + 1) * limit)])
  );
};

const getAllProducts: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...products]));
};

const getProduct: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...products]));
};
const handlers = [
  rest.get('/products', getPaginatedAllProducts),
  rest.get('/product', getProduct),
];
export default handlers;
