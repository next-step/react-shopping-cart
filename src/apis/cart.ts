import axios from "axios";
import { ICartItem, IProduct } from "../domain/types";
import { API_URL } from "./endpoints";

export async function requestDeleteItems(items: ICartItem[]): Promise<boolean> {
  try {
    const response = await axios.delete(API_URL.CART, { data: { items } });
    return response.status === 204;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function requestAddItem(product: IProduct): Promise<boolean> {
  try {
    const response = await axios.post(API_URL.CART, product);
    return response.status === 204;
  } catch (error) {
    console.error(error);
    return false;
  }
}
