import { getCarts, addCart } from "./api/cart";
import { postAddOrder } from "./api/orders";
import { getProducts } from "./api/product";

export const handlers = [
  getProducts,
  getCarts,
  addCart,
  postAddOrder
];
