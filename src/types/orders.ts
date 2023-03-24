import { Product } from './products';

export type OrderDetail = Product & {
  quantity: number;
};

export type Order = OrderDetail & { id: number };

export type OrderList = Order[];
