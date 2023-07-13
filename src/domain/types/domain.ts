// 규격은 README.md에 안내된 Mock Server 데이터의 규격을 참고하였습니다.
export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
  checked?: boolean; // 서버에서도 체크 여부 관리

  createdAt?: number;
  updatedAt?: number;
}

// export interface ICart {
//   items: ICartItem[];
// }

export interface ICartItem {
  id: number;
  product: IProduct;
  checked?: boolean;
}

export interface IOrder {
  id: number;
  orderDetails: IProduct[];
}
