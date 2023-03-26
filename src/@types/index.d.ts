interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface Cart {
  id: string;
  product: Product;
}

interface UserCart extends Cart {
  checked?: boolean;
  quantity: number;
}

interface OrderDetail extends Product {
  quantity: number;
}
interface Order {
  id: string;
  orderDetails: OrderDetail[];
}
