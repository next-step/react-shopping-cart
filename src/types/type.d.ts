export type ProductItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export type CartItem = {
  id: number;
  product: ProductItem
  quantity?: number;
}

export type Order = {
  id: number;
  orderDetails: OrderDetail[];
}

export type OrderDetail = {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
  quantity: number
}