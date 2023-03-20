import { cartsHandlers } from "./cartsHandler";
import { ordersHandlers } from "./ordersHandler";
import { productsHandler } from "./productsHandler";

export const handlers = [
  ...cartsHandlers,
  ...ordersHandlers,
  ...productsHandler,
];
