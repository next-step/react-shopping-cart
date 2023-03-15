export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

export interface ICart {
  id: number;
  product: IProduct;
}

export interface IOrder {
  id: number;
  orderDetails: IProduct[];
}
