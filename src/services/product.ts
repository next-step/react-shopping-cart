import { get } from "services";
import { ProductItem } from "types/type";

const PRODUCTS = "/products";

export const getProducts = async (): Promise<ProductItem[]> => {
  const { data } = await get(PRODUCTS);
  return data;
}

export const getProduct = async (id: number): Promise<ProductItem> => {
  const { data } = await get(`${PRODUCTS}/${id}`);
  return data;
}