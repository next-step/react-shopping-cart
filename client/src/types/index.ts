export type ProductType = {
  price: number;
  image: string;
  name: string;
  id: number;
};

export interface CartProductType extends ProductType {
  isOrder: boolean;
  amount: number;
}

export type CartProductListType = CartProductType[];

export interface OrderProductType {
  price: number;
  image: string;
  name: string;
  amount: number;
  id: number;
}

export type OrderedItemsType = {
  id: number;
  ordered: {
    items: OrderProductType[];
    totalAmount: number;
    totalPrice: number;
  };
};
export type DialogType = 'deleteCartItem' | 'orderCartItem' | '' | 'addCartItem' | 'payment';
export type DialogMessage =
  | '상품을 삭제하시겠습니까?'
  | '주문 하시겠습니까?'
  | '장바구니에 추가 하시겠습니까?'
  | ''
  | '결제 하시겠습니까?';

export type StatusType = 'Loading' | 'Fail' | 'Complete';
