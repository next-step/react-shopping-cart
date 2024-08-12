export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Products {
  products: Product[];
}

export interface CartItem {
  id: number;
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };
}

export interface CartItemWithCheck {
  product: {
    name: string;
    price: number;
    imageUrl: string;
  };
  quantity: number;
  done: boolean;
  id: number;
}

export interface CartItemsWithCheck {
  carts: CartItemWithCheck[];
}

export interface orderDetails extends Product {
  quantity: number;
}

export interface order {
  id: string;
  orderDetails: orderDetails[];
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
