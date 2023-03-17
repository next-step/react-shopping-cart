import { cartsHandlers, ordersHandler, productsHandler } from './handlers';

export const handlers = [
  ...cartsHandlers,
  ...ordersHandler,
  ...productsHandler
];
