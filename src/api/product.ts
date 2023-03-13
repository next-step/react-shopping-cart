import { get } from "api";
import { ProductItem } from "store/type";

const PRODUCTS = "/products";

export const getProducts = async ():Promise<ProductItem[]> => {
  const { data } = await get(PRODUCTS);
  return data;
}