export interface IProduct {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem {
  id: number;
  product: IProduct;
  checked?: boolean;
}
