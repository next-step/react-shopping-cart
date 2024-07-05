import { cartsHandlers } from './carts';
import { ordersHandlers } from './orders';
import { productsHandlers } from './products';

export const handlers = [
  ...ordersHandlers,
  ...productsHandlers,
  ...cartsHandlers,
];
