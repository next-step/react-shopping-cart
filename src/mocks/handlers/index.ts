import { default as productHandlers } from "./products";
import { default as ordersHandlers } from "./orders";
import { default as cartsHandlers } from "./carts";

export const handlers = [
  ...productHandlers,
  ...ordersHandlers,
  ...cartsHandlers,
];
