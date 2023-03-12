import { get } from "api";

const PRODUCTS = "/products";

export const getProducts = async () => {
  const { data } = await get(PRODUCTS);
  return data;
}