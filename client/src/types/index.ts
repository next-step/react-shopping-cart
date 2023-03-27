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

export type DialogType = 'deleteCart' | 'deleteCheckCart' | 'order' | '';
export type DialogMessage = '상품을 삭제하시겠습니까?' | '주문 하시겠습니까?' | '체크된 상품을 삭제하시겠습니까?' | '';
