import axios from "./api";
import EndPoints from "./endPoints";

export type OrderedProduct = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export type Order = {
  id: number;
  orderDetails: OrderedProduct[];
};

export const fetchOrders = () => {
  return axios.get<Order[]>(EndPoints.ORDERS.GET_ORDERS);
};

export const addOrder = (products: OrderedProduct[]) => {
  return axios.post<OrderedProduct[]>(EndPoints.ORDERS.ADD_ORDERS, { orderDetails: products });
};

export const fetchOrder = (orderId: string) => {
  return axios.get<OrderedProduct[]>(EndPoints.ORDERS.GET_ORDER, { data: { orderId } });
};
