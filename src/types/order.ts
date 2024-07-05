export interface OrderDetail {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}
export type OrderState = {
  state: {
    order: Order[];
  };
  version: number;
};
