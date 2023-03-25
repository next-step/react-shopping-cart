import { Product } from "./product";

export interface OrderDetail extends Product {
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}
