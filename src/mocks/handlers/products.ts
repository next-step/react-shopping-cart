import { rest } from 'msw';
import db from '../db.json';
import { Product } from '@/types';
import { sleep } from '../lib';

type ProductBody = Omit<Product, 'id'>;

export const productHandlers = [
  rest.get('/products', async (_req, res, ctx) => {
    await sleep(500);

    const page = _req.url.searchParams.get('page') || 0;
    const size = _req.url.searchParams.get('size') || 10;

    const from = +page * Number(size);
    const to = (+page + 1) * +size;

    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: db.products.slice(from, to),
        totalPage: Math.ceil(db.products.length / +size),
      }),
    );
  }),

  rest.post<ProductBody>('/products', (req, res, ctx) => {
    const newProduct = req.body;

    if (!newProduct) {
      return res(ctx.status(400), ctx.json({ ok: false, message: '상품 추가에 실패했습니다(추가상품없음).' }));
    }

    const newId = db.products[db.products.length - 1].id + 1;
    const updatedProducts = [...db.products, { id: newId, ...newProduct }];

    db.products = updatedProducts;

    return res(ctx.status(201), ctx.json({ ok: true, message: '상품이 성공적으로 추가되었습니다.' }));
  }),

  rest.get('/product/:id', (req, res, ctx) => {
    const { id } = req.params;

    const product = db.products.find(product => product.id === +id);

    if (!product) {
      return res(
        ctx.status(400),
        ctx.json({
          ok: false,
          message: '상품이 존재하지 않습니다.',
        }),
      );
      return;
    }
    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
      }),
    );
  }),

  rest.delete('/product/:id', (req, res, ctx) => {
    const { id } = req.params;
    const updatedProducts = db.products.filter(product => product.id !== +id);

    db.products = updatedProducts;

    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: {},
      }),
    );
  }),
];
