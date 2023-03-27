import { primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

// {
//   "id": 1675351772608,
//   "product": {
//     "id": 4,
//     "name": "리치스 스위트콘 대 2.95kg",
//     "price": 4780,
//     "imageUrl": "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg"
//   }
// },

export const products = {
  id: primaryKey(() => faker.random.numeric(5)),
  name: () => faker.commerce.productName(),
  price: () => Number(faker.commerce.price(10000, 100000, 0)),
  imageUrl: () => faker.image.food(),
};

export const productsWithQuantity = {
  id: primaryKey(() => Number(faker.random.numeric(5))),
  name: () => faker.commerce.productName(),
  price: () => Number(faker.commerce.price(10000, 100000, 0)),
  imageUrl: () => faker.image.food(),
  quantity: () => faker.random.numeric(20),
};

// export const products = {
//   id: primaryKey(() => faker.random.numeric(10000)),
//   product: product,
// };
