import { ICartItem, IProduct } from "../domain/types";
import { API_URL, RESPONSE_CODE } from "./constants";
import { ICartResponse, IRequestPaging } from "../domain/types/response";
import fetcher from "../utils/fetcher";

export async function requestDeleteItems(items: ICartItem[]): Promise<boolean> {
  const response = await fetcher.delete(API_URL.CART, { data: { items } });
  return response.status === RESPONSE_CODE.SUCCESS_EMPTY;
}

export async function requestToggleItem(items: ICartItem[], checked: boolean): Promise<boolean> {
  const response = await fetcher.patch(API_URL.CART_ITEMS_CHECK, {
    items,
    checked,
  });
  return response.status === RESPONSE_CODE.SUCCESS_EMPTY;
}

export async function requestUpdateQuantity(item: ICartItem): Promise<boolean> {
  const response = await fetcher.patch(API_URL.CART_ITEM_QUANTITY, { item });
  return response.status === RESPONSE_CODE.SUCCESS_EMPTY;
}

export async function requestAddItem(product: IProduct): Promise<boolean> {
  const response = await fetcher.post(API_URL.CART, product);
  return response.status === RESPONSE_CODE.SUCCESS_EMPTY;
}

export async function requestCartItems({ page, unit }: IRequestPaging) {
  const params = new URLSearchParams({
    page: page.toString(),
    unit: unit.toString(),
  });
  return fetcher.get<ICartResponse>(`${API_URL.CART}?${params.toString()}`);
}
