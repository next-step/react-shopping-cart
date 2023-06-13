import { IProductResponse } from "../domain/types";
import fetcher from "../utils/fetcher";
import { API_URL } from "./endpoints";

export async function requestProducts({ page = 1, unit = 2_999_999_9999_999 }) {
  try {
    const params = new URLSearchParams({ page: page.toString(), unit: unit.toString() });
    const URL = `${API_URL.PRODUCTS}?${params.toString()}`;

    return fetcher.get(URL) as Promise<IProductResponse>;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
