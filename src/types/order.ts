export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}

export interface OrderDetail {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
