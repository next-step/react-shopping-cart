import { get } from "api";

const CARTS = "/carts";

export const getCarts = async () => {
  const { data } = await get(CARTS);
  return data;
}