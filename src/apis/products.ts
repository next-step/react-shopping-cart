import { IProductResponse } from "../domain/shopping-cart/types";
import fetcher from "../utils/fetcher";
import { API_URL } from "./constants";

export async function getProducts({ page = 1, unit = 2_999_999_9999_999 }) {
  const params = new URLSearchParams({ page: page.toString(), unit: unit.toString() });
  const URL = `${API_URL.PRODUCTS}?${params.toString()}`;
  const response = (await fetcher.get(URL)) as IProductResponse;
  return response;
}
