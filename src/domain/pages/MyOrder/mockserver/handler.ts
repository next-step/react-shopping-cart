import { rest } from 'msw';
import { calculateOrderProductTotal, calculateOrderTotalAmount } from 'domain/utils';

const OrderedItems = [
  {
    id: 1,
    ordered: {
      items: [
        {
          id: 1,
          name: '냉면용기(대)',
          price: 83700,
          image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
          isOrder: true,
          amount: 1,
        },
        {
          id: 2,
          name: '생새우살 (71/90) 500g 4개',
          price: 29000,
          image: 'https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg',
          isOrder: true,
          amount: 1,
        },
      ],
      totalAmount: 2,
      totalPrice: 112700,
    },
  },
];

export const updateOrders = rest.post('/order/update', async (req, res, ctx) => {
  const userOrderItems = await req.json();
  if (!userOrderItems.length) {
    return res(ctx.status(400));
  }
  const newOrderItems = [...userOrderItems];
  const totalAmount = calculateOrderTotalAmount(newOrderItems);
  const totalPrice = calculateOrderProductTotal(newOrderItems);

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
