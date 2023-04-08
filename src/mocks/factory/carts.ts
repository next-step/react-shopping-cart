import { primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';
import { products } from './products';

export const carts = {
  id: primaryKey(() => Number(faker.random.numeric(5))),
  product: {
    ...products,
    id: () => Number(faker.random.numeric(5)),
  },
};
