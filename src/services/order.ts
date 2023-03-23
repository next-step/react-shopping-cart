import { get } from "services";
import { Order } from "types/type";

const ORDERS = "/orders";

export const getOrders = async (): Promise<Order[]> => {
  const { data } = await get(ORDERS);
  return data;
}