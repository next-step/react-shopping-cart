import { http, HttpResponse } from 'msw';
import { MOCK_PRODUCTS_DATA } from '../data/products';

const productList = MOCK_PRODUCTS_DATA;

export const productsHandlers = [
  // 상품 목록 조회 (Offset-Based)
  http.get('/productlist', ({ request }) => {
    const url = new URL(request.url);
    const offset = Number(url.searchParams.get('offset') || 8);
    const limit = Number(url.searchParams.get('limit') || 0);

    const totalSize = productList.length;
    const products = productList.slice(offset, offset + limit);
    const next = offset + limit < totalSize ? offset + limit : null;

    return HttpResponse.json({
      products,
      totalSize,
      next,
    });
  }),
  // 상품 목록 조회 (Cursor-Based)
  http.get('/products', ({ request }) => {
    const url = new URL(request.url);
    const cursor = Number(url.searchParams.get('cursor') || 8);
    const limit = Number(url.searchParams.get('limit') || 0);

    const cursorIndex = cursor
      ? productList.findIndex((product) => product.id === cursor) + 1
      : 0;
    const products = productList.slice(cursorIndex, cursorIndex + limit);
    const nextCursor =
      products.length === limit ? products[products.length - 1].id : null;
    const previousCursor =
      cursorIndex > 0 ? productList[cursorIndex - 1].id - limit : null;

    return HttpResponse.json({
      products,
      nextCursor,
      previousCursor,
    });
  }),
  // 상품 상세(단일) 조회
  http.get('/products/:id', ({ params }) => {
    const { id } = params;
    const product = productList.find((product) => product.id === Number(id));

    return HttpResponse.json(product);
  }),
];
