export type ProductItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export type CartItem = {
  id: number;
  product: ProductItem
}