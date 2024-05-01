import { ChangeEvent, useEffect } from 'react'

import { createStore } from '@/common/module/store/store'
import { useStore } from '@/common/module/store/useStore'
import { getCookie, setCookie } from '@/common/utils/cookie'
import type { Product } from '@/routes/-product-list.api'

import { CART_COOKIE_KEY, CART_MAX_COUNT, CART_MIN_COUNT } from './const'

const initializeCookie = getCookie(CART_COOKIE_KEY)

interface CartItem extends Pick<Product, 'id'> {
  count: number
}

const cartListStore = createStore<{
  cartList: Array<CartItem>
}>({
  cartList: initializeCookie ? JSON.parse(initializeCookie) : [],
})

/**
 * @summary 브라우저의 쿠키 데이터와 장바구니 데이터를 상태로 동기화하는 레파지토리이다.
 * @detail 상태 변경시 브라우저의 쿠키 데이터를 업데이트 한다.
 */
export const useCartListStore = () => {
  const [value, setValue] = useStore(cartListStore)

  useEffect(() => {
    setCookie(CART_COOKIE_KEY, value.cartList, {})
  }, [value])

  const saveProduct = (id: CartItem['id']) => {
    const foundProduct = value.cartList.find((product) => product.id === id)

    if (foundProduct) {
      setValue((prev) => ({
        ...prev,
        cartList: [
          ...prev.cartList.filter((product) => product.id !== id),
          { id, count: foundProduct.count + 1 },
        ],
      }))

      return
    }

    setValue((prev) => ({ ...prev, cartList: [...prev.cartList, { id, count: 1 }] }))
  }

  const increaseCount = (id: CartItem['id']) => {
    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList.map((product) => {
        return product.id === id
          ? {
              ...product,
              // count: product.count < CART_MAX_COUNT ? product.count + 1 : CART_MAX_COUNT,
              count: Math.min(product.count + 1, CART_MAX_COUNT),
            }
          : product
      }),
    }))
  }

  const decreaseCount = (id: CartItem['id']) => {
    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList
        .map((product) => {
          return product.id === id
            ? {
                ...product,
                // count: product.count > CART_MIN_COUNT ? product.count - 1 : CART_MIN_COUNT,
                count: Math.max(product.count - 1, CART_MIN_COUNT),
              }
            : product
        })
        .filter((product) => product.count > 0),
    }))
  }

  const deleteProduct = (id: CartItem['id']) => {
    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList.filter((product) => product.id !== id),
    }))
  }

  const changeProductCount = (e: ChangeEvent<HTMLInputElement>, product: CartItem) => {
    if (e.target.valueAsNumber > CART_MAX_COUNT) {
      e.target.value = String(CART_MAX_COUNT)

      setValue((prev) => ({
        ...prev,
        cartList: prev.cartList.map((item) => {
          return item.id === product.id
            ? {
                ...product,
                count: CART_MAX_COUNT,
              }
            : product
        }),
      }))

      return
    }

    if (e.target.valueAsNumber < CART_MIN_COUNT) {
      e.target.value = String(CART_MIN_COUNT)

      setValue((prev) => ({
        ...prev,
        cartList: prev.cartList.map((item) => {
          return item.id === product.id
            ? {
                ...product,
                count: CART_MIN_COUNT,
              }
            : product
        }),
      }))

      return
    }

    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList.map((item) => {
        return item.id === product.id
          ? {
              ...product,
              count: e.target.valueAsNumber,
            }
          : product
      }),
    }))
  }

  const deleteAllProducts = () => {
    setValue((prev) => ({ ...prev, cartList: [] }))
  }

  return {
    cartList: value.cartList,
    actions: {
      saveProduct,
      increaseCount,
      decreaseCount,
      deleteProduct,
      changeProductCount,
      deleteAllProducts,
    },
  }
}
