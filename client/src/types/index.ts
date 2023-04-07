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

export type CartListType = CartProductType[];

export interface OrderProductType {
  price: number;
  image: string;
  name: string;
  amount: number;
  id: number;
}
export type OrderedItemType = OrderProductType[];

export type OrderedItemsType = {
  id: number;
  ordered: {
    item: OrderedItemType;
    totalAmount: number;
    totalPrice: number;
  };
};
export type DialogType = 'deleteCheckedCartItem' | 'orderCartItem' | '' | 'moveCartPage' | 'payment';
export type DialogMessage =
  | '상품을 삭제하시겠습니까?'
  | '주문 하시겠습니까?'
  | '장바구니로 이동하시겠습니까?'
  | ''
  | '결제 하시겠습니까?';
