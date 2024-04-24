import { act, renderHook } from '@/tests/test-utils'
import { useCartProductListSelection, useCartProductSelection } from '@/stores/hooks'
import { CartGroupedData } from '@/types/api-type'

const CART_SELECTION = 0
const TOGGLE = 1

const SAMPLE_CART_LIST: CartGroupedData[] = [
  { id: 1, name: '', price: 1, imageUrl: '', quantity: 1 },
  { id: 2, name: '', price: 2, imageUrl: '', quantity: 1 },
  { id: 3, name: '', price: 3, imageUrl: '', quantity: 1 },
  { id: 4, name: '', price: 4, imageUrl: '', quantity: 1 },
]

describe('cartSelectAtom testing', () => {
  test('useCartProductSelection - toggle product selection', () => {
    const { result } = renderHook(useCartProductSelection)

    expect(result.current[CART_SELECTION].size).toBe(0)

    act(() => result.current[TOGGLE](0))
    act(() => result.current[TOGGLE](1))

    expect(result.current[CART_SELECTION].size).toBe(2)
    expect(result.current[CART_SELECTION].has(0)).toBe(true)
    expect(result.current[CART_SELECTION].has(1)).toBe(true)

    act(() => result.current[TOGGLE](0))
    expect(result.current[CART_SELECTION].has(0)).toBe(false)

    act(() => result.current[TOGGLE](1))
    expect(result.current[CART_SELECTION].has(1)).toBe(false)

    expect(result.current[CART_SELECTION].size).toBe(0)
  })

  test('useCartProductListSelection - toggle product list selection', () => {
    const { result } = renderHook(() => useCartProductListSelection(SAMPLE_CART_LIST))
    expect(result.current[CART_SELECTION]).toBe(false)
    act(() => result.current[TOGGLE]())
    expect(result.current[CART_SELECTION]).toBe(true)
    act(() => result.current[TOGGLE]())
    expect(result.current[CART_SELECTION]).toBe(false)
  })
})
