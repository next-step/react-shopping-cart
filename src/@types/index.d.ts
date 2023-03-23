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

interface UserCart extends Cart {
  checked?: boolean;
}
