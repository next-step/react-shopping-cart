import { rest } from 'msw';
import db from '../db.json';
import { Product } from '@/types';

export const cartsHandlers = [
  rest.get('/carts', async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        products: db.carts,
      }),
    );
  }),

  rest.post<Product>('/carts', async (req, res, ctx) => {
    const product = req.body;

    if (!product) {
      res(ctx.status(400), ctx.json({ ok: false, message: '장바구니에 상품 추가에 실패했습니다(상품없음).' }));
    }

    const currentCarts = [...db.carts];
    const isExist = currentCarts.find(cart => cart.product.id === product.id);

    if (isExist) {
      const updatedCarts = currentCarts.filter(cart => cart.product.id !== product.id);
      db.carts = updatedCarts;
    } else {
      const newId = db.carts[db.carts.length - 1].id + 1;
      const updatedCarts = [...currentCarts, { id: newId, product }];
      db.carts = updatedCarts;
    }

    res(ctx.status(201), ctx.json({ ok: true, message: '상품이 성공적으로 업데이트 되었습니다.' }));
  }),

  rest.delete('/carts/:cartId', (req, res, ctx) => {
    const { cartId } = req.params;
    const updateCarts = db.carts.filter(cart => cart.id !== +cartId);

    db.carts = updateCarts;

    res(
      ctx.status(200),
      ctx.json({
        ok: true,
        products: {},
      }),
    );
  }),
];
