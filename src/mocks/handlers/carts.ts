import { rest } from 'msw';
import db from '../db.json';
import { Product } from '@/types';

export const cartsHandlers = [
  rest.get('/carts', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: db.carts,
      }),
    );
  }),

  rest.post<Product>('/carts', (req, res, ctx) => {
    const product = req.body;

    if (!product) {
      return res(ctx.status(400), ctx.json({ ok: false, message: '장바구니에 상품 추가에 실패했습니다(상품없음).' }));
    }

    const currentCarts = [...db.carts];
    const isExist = currentCarts.find(cart => cart.product.id === product.id);

    if (isExist) {
      const updatedCarts = currentCarts.filter(cart => cart.product.id !== product.id);
      db.carts = updatedCarts;
    } else {
      const newId = currentCarts[currentCarts.length - 1].id + 1;
      const updatedCarts = [...currentCarts, { id: newId, product }];
      db.carts = updatedCarts;
    }

    return res(ctx.status(201), ctx.json({ ok: true, message: '상품이 성공적으로 업데이트 되었습니다.' }));
  }),

  rest.delete('/carts', (req, res, ctx) => {
    const cardIds = req.url.searchParams.getAll('cartId');

    if (!cardIds) {
      return res(ctx.status(400), ctx.json({ ok: false, message: '삭제 대상 인덱스가 없습니다.' }));
    }
    db.carts.filter(cart => !cardIds.includes(cart.id.toString()));

    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: {},
      }),
    );
  }),
  rest.delete('/carts/:cartId', (req, res, ctx) => {
    const { cartId } = req.params;

    db.carts = db.carts.filter(cart => cart.id !== +cartId);
    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: {},
      }),
    );
  }),
];
