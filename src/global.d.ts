declare interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

declare interface Cart {
  id: number;
  product: Product
}

declare interface UserCart extends Cart {
  checked?: boolean;
  quantity: number;
}

declare interface Order {
  id: number;
  orderDetails: OrderDetail[];
}

declare interface OrderDetail {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
  quantity: number
}