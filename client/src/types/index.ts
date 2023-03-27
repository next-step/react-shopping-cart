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

export interface OrderProductType extends ProductType {
  amount: number;
}
export type OrderListType = OrderProductType[];

export type DialogType = 'deleteCart' | 'deleteCheckCart' | 'cartorder' | '' | 'cart';
export type DialogMessage =
  | '상품을 삭제하시겠습니까?'
  | '주문 하시겠습니까?'
  | '체크된 상품을 삭제하시겠습니까?'
  | '장바구니로 이동하시겠습니까?'
  | '';
