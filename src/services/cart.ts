import { destroy, get, post } from "services";
import { CartItem, ProductItem } from "types/type";

const CARTS = "/carts";

export const getCarts = async (): Promise<CartItem[]> => {
  const { data } = await get(CARTS);
  return data;
}

export const addCart = async (item: ProductItem): Promise<CartItem> => {
  const { data } = await post(CARTS, { product: item });
  return data;
}

export const deleteCart = async (id: number): Promise<any> => {
  return destroy(`${CARTS}/${id}`);
}