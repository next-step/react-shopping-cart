import { primaryKey, manyOf } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const order = {
  id: primaryKey(() => Number(faker.random.numeric(5))),
  product: manyOf('productsWithQuantity'),
};

export const orders = {
  id: primaryKey(() => Number(faker.random.numeric(5))),
  orderDetails: manyOf('order'),
};
