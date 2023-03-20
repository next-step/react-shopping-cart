import { get } from "services";
import { CartItem } from "types/type";

const CARTS = "/carts";

export const getCarts = async (): Promise<CartItem[]> => {
  const { data } = await get(CARTS);
  return data;
}