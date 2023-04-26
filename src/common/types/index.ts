export type DialogType = 'deleteCartItem' | 'orderCartItem' | '' | 'addCartItem' | 'payment';
export type DialogMessage =
  | '상품을 삭제하시겠습니까?'
  | '주문 하시겠습니까?'
  | '장바구니에 추가 하시겠습니까?'
  | ''
  | '결제 하시겠습니까?';
