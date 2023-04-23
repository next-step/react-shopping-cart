export interface IProduct {
  id: number | string;
  name: string;
  price: number;
  imageUrl: string;
  amount?: number;
  checked?: boolean;

  createdAt?: number;
  updatedAt?: number;
}

export interface ICart {
  // id: number | string;
  products: IProduct[];
}

export interface IOrderItem {
  id: number | string;
  orderDetails: IProduct[];
}
