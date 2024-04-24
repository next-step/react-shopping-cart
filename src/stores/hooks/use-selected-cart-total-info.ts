import { CartGroupedData } from '@/types/api-type'
import { useAtomValue } from 'jotai'
import { cartSelectAtom } from '@/stores/atoms/cart-select-atom'

/** 장바구니 결제 예상금액, 주문 개수 관련 상태 */
export const useSelectedCartTotalInfo = (cartList: CartGroupedData[]) => {
  const cartSelection = useAtomValue(cartSelectAtom)

  const totalSelection = cartSelection.size

  const totalPrice = cartList.reduce(
    (total, cartProduct) =>
      (total += cartSelection.has(cartProduct.id) ? cartProduct.price * cartProduct.quantity : 0),
    0,
  )

  return [totalSelection, totalPrice] as const
}
