import { rest } from 'msw';
import type { OrderProductType, OrderedItemsType } from 'types';
import { calculateOrderProductTotal, calculateOrderTotalAmount } from 'utils/app';

const OrderedItems: OrderedItemsType[] = [
  {
    id: 0,
    ordered: {
      items: [],
      totalAmount: 0,
      totalPrice: 0,
    },
  },
];

export const updateOrders = rest.post('/order/update', async (req, res, ctx) => {
  const userOrderItems = (await req.json()) as OrderProductType[];

  // 유효성 스키마 검사
  if (!userOrderItems.length) {
    return res(ctx.status(400));
  }
  const newOrderItems = [...userOrderItems];
  const totalAmount = calculateOrderTotalAmount(newOrderItems);
  const totalPrice = calculateOrderProductTotal(newOrderItems);

  if (OrderedItems[0].id === 0) {
    OrderedItems.pop();
  }

  OrderedItems.push({
    id: OrderedItems.length + 1,
    ordered: {
      items: newOrderItems,
      totalAmount,
      totalPrice,
    },
  });

  return res(ctx.status(200), ctx.json(OrderedItems));
});

export const getOrders = rest.get('/orders', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(OrderedItems));
});
