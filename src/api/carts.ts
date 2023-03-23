import axios from "./api";
import EndPoint from "./endPoints";
import type { Product } from "./products";

export type Cart = {
  id: number;
  product: Product;
};

export const fetchCarts = () => {
  return axios.get<Cart[]>(EndPoint.CARTS.GET_CARTS);
};

export const addCart = (product: Product) => {
  return axios.post<Cart>(EndPoint.CARTS.ADD_CARTS, { product });
};

export const deleteCard = (cartId: string) => {
  return axios.delete<Cart>(EndPoint.CARTS.DELETE_CARTS, { data: { cartId } });
};
