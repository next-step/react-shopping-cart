import { useAtom } from 'jotai'
import { cartSelectAtom } from '@/stores/atoms/cart-select-atom'
import { Product } from '@/types/api-type'

/** 장바구니 상품 단일 선택 관련 상태 */
export const useCartProductSelection = () => {
  const [cartSelection, setCartSelection] = useAtom(cartSelectAtom)

  const getIsSelectedCartProduct = (productId: Product['id']) => {
    return cartSelection.has(productId)
  }

  const selectCartProduct = (productId: Product['id']) => {
    setCartSelection(cartSelection => new Set([...cartSelection.add(productId)]))
  }

  const unSelectCartProduct = (productId: Product['id']) => {
    setCartSelection(cartSelection => {
      cartSelection.delete(productId)
      return new Set([...cartSelection])
    })
  }

  const toggleCartProductSelection = (productId: Product['id']) => {
    if (getIsSelectedCartProduct(productId)) return unSelectCartProduct(productId)
    selectCartProduct(productId)
  }

  return [cartSelection, toggleCartProductSelection] as const
}
