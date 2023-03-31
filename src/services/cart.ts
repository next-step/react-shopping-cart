import { destroy, get, post } from "services";

const CARTS = "/carts";

export const getCarts = async (): Promise<Cart[]> => {
  const { data } = await get(CARTS);
  return data;
}

export const addCart = async (item: Product): Promise<Cart> => {
  const { data } = await post(CARTS, { product: item });
  return data;
}

export const deleteCart = async (id: number): Promise<any> => {
  return destroy(`${CARTS}/${id}`);
}