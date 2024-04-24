import { useSetAtom } from 'jotai'
import { cartSelectAtom } from '@/stores/atoms/cart-select-atom'

/** 장바구니 선택 상태를 완전 초기화 */
export const useResetCartProductSelection = () => {
  const setCartSelectAtom = useSetAtom(cartSelectAtom)

  const resetSelection = () => {
    setCartSelectAtom(new Set())
  }

  return resetSelection
}
