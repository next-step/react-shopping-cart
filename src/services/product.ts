import { get } from "services";
import { ProductItem } from "types/type";

const PRODUCTS = "/products";

type FetchProductsOptions = {
  page: number;
  limit: number;
};

export const fetchProducts = async (options: FetchProductsOptions): Promise<ProductItem[]> => {
  const { page, limit } = options;
  const { data } = await get(`${PRODUCTS}?_page=${page}&_limit=${limit}`);
  return data;
}

export const getProduct = async (id: number): Promise<ProductItem> => {
  const { data } = await get(`${PRODUCTS}/${id}`);
  return data;
}