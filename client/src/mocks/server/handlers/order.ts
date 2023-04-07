import { rest } from 'msw';
import type { OrderedItemType, OrderedItemsType } from 'types';
import { calculateOrderProductTotal, calculateOrderTotalAmount } from 'utils/app';

const OrderedItems: OrderedItemsType[] = [
  {
    id: 0,
    ordered: {
      item: [],
      totalAmount: 0,
      totalPrice: 0,
    },
  },
];

export const updateOrders = rest.post('/order/update', async (req, res, ctx) => {
  const userOrderItem = (await req.json()) as OrderedItemType;

  // 유효성 스키마 검사
  if (!userOrderItem.length) {
    return res(ctx.status(400));
  }
  const newOrderItem = [...userOrderItem];
  const totalAmount = calculateOrderTotalAmount(newOrderItem);
  const totalPrice = calculateOrderProductTotal(newOrderItem);
  if (OrderedItems.length === 1) {
    OrderedItems.pop();
  }
  OrderedItems.push({
    id: OrderedItems.length + 1,
    ordered: {
      item: newOrderItem,
      totalAmount,
      totalPrice,
    },
  });

  console.log(OrderedItems);
  return res(ctx.status(200), ctx.json(OrderedItems));
});

export const getOrders = rest.get('/orders', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(OrderedItems));
});
