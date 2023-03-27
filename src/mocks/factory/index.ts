import { factory } from '@mswjs/data';
import { products, productsWithQuantity } from './products';
import { orders, order } from './orders';
import { carts } from './carts';

export const db = factory({
  products,
  productsWithQuantity,
  order,
  orders,
  carts,
});
