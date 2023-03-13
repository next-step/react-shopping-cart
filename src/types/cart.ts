import { Product } from "./product";

export interface Cart {
  id: number;
  product: Omit<Product, "id">;
}
