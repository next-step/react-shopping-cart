import { rest } from 'msw';

import { PaginatedProducts, Products } from 'types/product';
import { API } from 'constants/api';

import { products } from '../data';

const getProducts = rest.get<Products>(API.PRODUCTS, (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(products));
});

const getPaginationProducts = rest.get(API.PRODUCTS, async (req, res, ctx) => {
  const { searchParams } = req.url;

  const size = Number(searchParams.get('size'));
  const page = Number(searchParams.get('page'));
  const totalCount = products.length;
  const totalPages = Math.round(totalCount / size);

  return res(
    ctx.status(200),
    ctx.json<PaginatedProducts>({
      contents: products.slice(page * size, (page + 1) * size),
      pageNumber: page,
      pageSize: size,
      totalPages,
      totalCount,
      isLastPage: totalPages <= page,
    }),
    ctx.delay(1000)
  );
});

export const productHandlers = [getPaginationProducts];
