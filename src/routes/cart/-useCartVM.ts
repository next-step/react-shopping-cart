import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { useCartListStore } from '../-common/store/cartListStore/cartListStore'
import { CartListResponse, getCartList } from './-cart-list.api'

/**
 * @summary 카트 페이지의 view model
 */
export const useCartVM = () => {
  const { actions } = useCartListStore()
  const queryClient = useQueryClient()

  /**
   * @summary cartsQuery를 트리거한다.
   */
  const cartQueryTriggerDecorator = <T>(fn: T) => {
    queryClient.invalidateQueries({
      queryKey: ['carts'],
    })

    return fn
  }

  const cartsQuery = useQuery({
    queryKey: ['carts'],
    queryFn: getCartList,
    select: (response) => {
      const parsed = response.list.map((product) => {
        return {
          ...product,
          totalPrice: product.price * product.count,
        }
      })

      return {
        list: parsed,
        hasProduct: parsed.length > 0,
      }
    },
  })

  const [selectedProductList, setSelectedProductList] = useState(
    () => new Map(cartsQuery.data?.list.map((product) => [product.id, true]))
  )

  useEffect(() => {
    setSelectedProductList(() => {
      return new Map(cartsQuery.data?.list.map((product) => [product.id, true]))
    })
  }, [cartsQuery.data])

  const toggleProduct = (id: CartListResponse['list'][number]['id']) => {
    setSelectedProductList((prev) => {
      const newMap = new Map(prev)

      if (newMap.has(id)) {
        newMap.delete(id)

        return newMap
      }

      newMap.set(id, true)

      return newMap
    })
  }

  const isCheckedProduct = (id: CartListResponse['list'][number]['id']) => {
    return selectedProductList.get(id)
  }

  const totalSelectedCount = selectedProductList.size
  const isAllProductChecked = selectedProductList.size === cartsQuery.data?.list.length

  const toggleAll = () => {
    if (isAllProductChecked) {
      setSelectedProductList(() => new Map())

      return
    }

    setSelectedProductList(() => {
      return new Map(cartsQuery.data?.list.map((product) => [product.id, true]))
    })
  }

  const paymentTotal = cartsQuery.data?.list
    .filter((product) => selectedProductList.get(product.id))
    .reduce((acc, product) => acc + product.totalPrice, 0)
    .toLocaleString()

  const decoratedCartListActions = Object.entries(actions).reduce(
    (prev, [key, fn]) => {
      return {
        ...prev,
        [key]: cartQueryTriggerDecorator(fn),
      }
    },
    {} as typeof actions
  )

  return {
    cartsQuery,
    computed: {
      isAllProductChecked,
      totalSelectedCount,
      paymentTotal,
    },
    actions: {
      toggleProduct,
      toggleAll,
      isCheckedProduct,
      ...decoratedCartListActions,
    },
  }
}
