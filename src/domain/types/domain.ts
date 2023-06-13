// 규격은 README.md에 안내된 Mock Server 데이터의 규격을 참고하였습니다.
export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;

  createdAt?: number;
  updatedAt?: number;
}

export interface ICart {
  items: ICartItem[];
}

export interface ICartItem {
  id: number;
  product: IProduct;
}

export interface IOrder {
  id: number;
  orderDetails: IProduct[];
}
