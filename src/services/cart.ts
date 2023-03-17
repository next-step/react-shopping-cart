import { get } from "services";

const CARTS = "/carts";

export const getCarts = async () => {
  const { data } = await get(CARTS);
  return data;
}