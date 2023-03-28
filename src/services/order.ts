import { get, post } from "services";
import { Order, OrderDetail } from "types/type";

const ORDERS = "/orders";

export const getOrders = async (): Promise<Order[]> => {
  const { data } = await get(ORDERS);
  return data;
}

export const addOrder = async (order: OrderDetail[]): Promise<Order> => {
  const { data } = await post(ORDERS, { orderDetails: order });
  return data;
}