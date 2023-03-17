import { getCarts } from "./api/cart";
import { getProducts } from "./api/product";

export const handlers = [
  getProducts,
  getCarts
];
