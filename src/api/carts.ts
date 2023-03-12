import api from "./api";
import EndPoint from "./endPoints";
import type { Product } from "./products";

export type Cart = {
  id: string;
  product: Product;
};

export const fetchCarts = () => {
  return api.get<Cart[]>(EndPoint.CARTS.GET_CARTS);
};

export const addCart = (product: Product) => {
  return api.post<Cart>(EndPoint.CARTS.ADD_CARTS, { product });
};

export const deleteCard = (cartId: string) => {
  return api.delete<Cart>(EndPoint.CARTS.DELETE_CARTS, { data: { cartId } });
};
