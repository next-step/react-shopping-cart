export interface IProduct {
  id?: number;
  name: string;
  price: number;
  amount?: number;
  imageUrl: string;
}

export interface ICartItem {
  id: number;
  product: IProduct;
  checked?: boolean;
}

export interface IOrderItem {
  id: number;
  orderDetails: IProduct[];
}
