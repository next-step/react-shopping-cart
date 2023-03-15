import { rest } from 'msw';
import db from '../db.json';
import { OrderDetail } from '@/types';

export const ordersHandlers = [
  rest.get('/orders', async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        orders: db.orders,
      }),
    );
  }),

  rest.post<OrderDetail[]>('/orders', (req, res, ctx) => {
    const orderDetails = req.body;

    if (!orderDetails) {
      res(ctx.status(400), ctx.json({ ok: false, message: '주문에 실패했습니다(주문 상품없음).' }));
    }

    const currentOrders = [...db.orders];

    const newId = currentOrders[currentOrders.length - 1].id + 1;
    const updateOrders = [...currentOrders, { id: newId, orderDetails }];
    db.orders = updateOrders;

    res(ctx.status(201), ctx.json({ ok: true, message: '주문이 성공적으로 이루어졌습니다.' }));
  }),

  rest.get('/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    const order = db.orders.find(order => order.id !== +id);

    if (!order) {
      res(
        ctx.status(400),
        ctx.json({
          ok: false,
          message: '주문내역이 존재하지 않습니다.',
        }),
      );
      return;
    }

    res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: order,
      }),
    );
  }),
];
