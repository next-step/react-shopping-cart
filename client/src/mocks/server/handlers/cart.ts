// import { rest } from 'msw';
// import type { CartListType, ProductType } from 'types';
// type UserCartType = CartListType;

// const userCarts: UserCartType = [];

// const addCart = rest.post('/carts', async (req, res, ctx) => {
//   const product = (await req.json()) as ProductType;
//   // 이미 추가된 Proudct는 추가 못하게
//   const cartList=userCarts.find((cartProduct) => cartProduct.id === product.id);
//   if(!cartList){

//   }
//   userCarts.push(product);
//   return res(ctx.status(201));
// });
// export const getCarts = rest.get('/carts', (req, res, ctx) => {
//   return res(ctx.status(200), ctx.json(userCarts));
// });

// export const deleteCart = rest.post('/cart/delete', async (req, res, ctx) => {
//   const product = await req.json();
//   const newCarts = userCarts.filter((item) => item.id !== product.id);
//   // length가 없으면  에러

//   userCarts = newCarts;
//   return res(ctx.status(200), ctx.json(newCarts));
// });
// export const updateCart = rest.put('/cart/update', async (req, res, ctx) => {
//   const product = await req.json();

//   //   카트에 product의 id 값이 존재하지 않으면 에러

//   const newCarts = userCarts.map((item) => {
//     if (item.id === product.id) {
//       return product;
//     }
//     return item;
//   });
//   userCarts = newCarts;

//   return res(ctx.status(200), ctx.json(newCarts));
// });
