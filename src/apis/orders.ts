import { IOrderResponse } from "../domain/types";
import fetcher from "../utils/fetcher";

export async function requestMyOrders() {
  return fetcher.get<IOrderResponse>("/api/orders");
}
