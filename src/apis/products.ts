import { IProductResponse, IRequestPaging } from "../domain/types/response";
import fetcher from "../utils/fetcher";
import { API_URL } from "./constants";

export async function requestProducts({ page = 1, unit = 2_999_999_9999_999 }: IRequestPaging) {
  const params = new URLSearchParams({ page: page.toString(), unit: unit.toString() });
  const URL = `${API_URL.PRODUCTS}?${params.toString()}`;

  return fetcher.get<IProductResponse>(URL);
}
