import { ICartItem } from "../domain/types";
import { API_URL, RESPONSE_CODE } from "./constants";
import fetcher from "../utils/fetcher";

export async function requestCheckout(items: ICartItem[]) {
  const response = await fetcher.post(API_URL.CHECKOUT, { items });
  return response.status === RESPONSE_CODE.SUCCESS_EMPTY;
}
