import { rest } from 'msw';

let mockCartData = [
  {
    id: 1,
    name: '냉면용기(대)',
    price: 83700,
    image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
    isOrder: false,
    amount: 1,
  },
  {
    id: 2,
    name: '생새우살 (71/90) 500g 4개',
    price: 29000,
    image: 'https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg',
    isOrder: false,
    amount: 1,
  },
  {
    id: 3,
    name: '펩시 콜라 355ml 24캔',
    price: 83700,
    image: 'https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg',
    isOrder: false,
    amount: 1,
  },
];

export const getCartItem = rest.get('/carts', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockCartData));
});

export const updateCartItem = rest.put('/cart/update', async (req, res, ctx) => {
  const product = await req.json();

  const newCarts = mockCartData.map((item) => {
    if (item.id === product.id) {
      return product;
    }
    return item;
  });
  if (!newCarts.length) {
    return res(ctx.status(400), ctx.json({ message: '장바구니가 비어있습니다!' }));
  }
  mockCartData = newCarts;

  return res(ctx.status(200), ctx.json(newCarts));
});

export const deleteCart = rest.post('/cart/delete', async (req, res, ctx) => {
  const product = await req.json();
  const newCarts = mockCartData.filter((item) => item.id !== product.id);

  mockCartData = newCarts;
  return res(ctx.status(200), ctx.json(newCarts));
});
