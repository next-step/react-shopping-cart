import { IOrderResponse } from "../domain/types";
import { IRequestOrderPaging } from "../domain/types/response";
import fetcher from "../utils/fetcher";
import { API_URL } from "./constants";

export async function requestMyOrders({ page, unit }: IRequestOrderPaging) {
  const params = new URLSearchParams({
    page: page.toString(),
    unit: unit.toString(),
  });
  return fetcher.get<IOrderResponse>(`${API_URL.ORDERS}?${params.toString()}`);
}
