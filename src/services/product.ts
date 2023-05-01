import { get } from "services";

const PRODUCTS = "/products";

type FetchProductsOptions = {
  page: number;
  limit: number;
};

export const fetchProducts = async (options: FetchProductsOptions): Promise<Product[]> => {
  const { page, limit } = options;
  const { data } = await get(`${PRODUCTS}?_page=${page}&_limit=${limit}`);
  return data;
}

export const getProduct = async (id: number): Promise<Product> => {
  const { data } = await get(`${PRODUCTS}/${id}`);
  return data;
}