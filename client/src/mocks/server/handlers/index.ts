import * as cartHandler from './cart';
import * as orderHandler from './order';
import * as productHandler from './product';

export const handlers = [
  ...Object.values(cartHandler),
  ...Object.values(orderHandler),
  ...Object.values(productHandler),
];
