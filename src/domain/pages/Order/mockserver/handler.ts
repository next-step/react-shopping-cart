import { rest } from 'msw';
const mockCartData = [
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
  {
    id: 3,
    name: '펩시 콜라 355ml 24캔',
    price: 83700,
    image: 'https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg',
    isOrder: true,
    amount: 1,
  },
  {
    id: 4,
    name: '리치스 스위트콘 대 2.95kg',
    price: 4780,
    image: 'https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg',
    isOrder: true,
    amount: 1,
  },
];
export const getCartItem = rest.get('/carts', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockCartData));
});
