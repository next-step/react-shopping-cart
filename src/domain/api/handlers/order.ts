import { rest } from 'msw';
import type { OrderProductType, OrderedItemsType } from 'domain/types';
import { calculateOrderProductTotal, calculateOrderTotalAmount } from 'domain/utils';

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

export const getOrders = rest.get('/orders', async (req, res, ctx) => {
  return res(ctx.delay(1000), ctx.status(200), ctx.json(OrderedItems));
});
