import { CartGroupedData } from '@/types/api-type'
import { useAtom } from 'jotai'
import { cartSelectAtom } from '@/stores/atoms/cart-select-atom'

/** 장바구니 상품 목록 관련 상태 */
export const useCartProductListSelection = (cartList: CartGroupedData[]) => {
  const cartProductIdList = cartList.map(({ id }) => id)
  const [cartSelection, setCartSelection] = useAtom(cartSelectAtom)
  const isCartProductListSelected = cartSelection.size === cartProductIdList.length

  const selectAllCartProduct = () => {
    setCartSelection(new Set(cartProductIdList))
  }

  const unSelectAllCartProduct = () => {
    setCartSelection(new Set())
  }

  const toggleCartProductListSelection = () => {
    if (isCartProductListSelected) return unSelectAllCartProduct()
    selectAllCartProduct()
  }

  return [isCartProductListSelected, toggleCartProductListSelection] as const
}
