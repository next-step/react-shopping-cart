import { useAtomValue } from 'jotai'
import { cartSelectAtom } from '@/stores/atoms/cart-select-atom'

/** 장바구니 선택 상품 존재 유무와 관련된 상태 */
export const useIsAnyCartProductSelected = () => useAtomValue(cartSelectAtom).size > 0
