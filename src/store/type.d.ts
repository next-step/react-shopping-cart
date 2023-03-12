export type ProductItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export type CartItem = {
  id: number;
  product: Product
}

export type Product = {
  name: string;
  price: number;
  imageUrl: string;
}