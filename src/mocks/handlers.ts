import { deleteCart, getCarts, postCart } from "./api/cart";
import { postAddOrder } from "./api/orders";
import { getProducts } from "./api/product";

export const handlers = [
  getProducts,
  getCarts,
  postCart,
  postAddOrder,
  deleteCart
];
