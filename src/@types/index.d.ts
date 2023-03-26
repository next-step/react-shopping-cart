declare interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

declare interface Cart {
  id: string;
  product: Product;
}

declare interface UserCart extends Cart {
  checked?: boolean;
  quantity: number;
}

declare interface OrderDetail extends Product {
  quantity: number;
}
declare interface Order {
  id: string;
  orderDetails: OrderDetail[];
}
