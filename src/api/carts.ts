import axios from "./api";
import EndPoint from "./endPoints";
import type { Product } from "./products";

export type Cart = {
  id: number;
  product: Product;
};

export const fetchCarts = () => {
  return axios.get<Cart[]>(EndPoint.CARTS);
};

export const addCart = (product: Product) => {
  return axios.post<Cart>(EndPoint.CARTS, { product });
};

export const deleteCart = (productId: number) => {
  return axios.delete<Cart>(`${EndPoint.CARTS}/${productId}`);
};

export const deleteCarts = (productIds: number[]) => {
  return axios.delete<Cart[]>(`${EndPoint.CARTS}`, { data: { productIds } });
};
