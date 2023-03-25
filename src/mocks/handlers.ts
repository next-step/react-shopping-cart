import { getCarts, addCart } from "./api/cart";
import { getProducts } from "./api/product";

export const handlers = [
  getProducts,
  getCarts,
  addCart,
];
