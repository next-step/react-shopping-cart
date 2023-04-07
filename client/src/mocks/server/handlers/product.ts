import { rest } from 'msw';
import data from '../data/products.json';

const PRODUCT_LENGTH = 8;
const TOTAL_PAGE = Math.ceil(data.products.length / PRODUCT_LENGTH);

export const getProducts = rest.get('/products', (req, res, ctx) => {
  const currentPage = Number(req.url.searchParams.get('page'));
  // Todo : currentPage에 대해 스키마 유효성검사

  const offset = (currentPage - 1) * PRODUCT_LENGTH;
  const newProduct = data.products.slice(offset, offset + PRODUCT_LENGTH);
  return res(ctx.json({ products: newProduct, TOTAL_PAGE }));
});
