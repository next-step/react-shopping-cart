import { get, post } from "services";

const ORDERS = "/orders";

export const getOrders = async (): Promise<Order[]> => {
  const { data } = await get(ORDERS);
  return data;
}

export const addOrder = async (order: OrderDetail[]): Promise<Order> => {
  const { data } = await post(ORDERS, { orderDetails: order });
  return data;
}