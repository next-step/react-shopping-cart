import { useEffect, useState } from 'react'
import { z } from 'zod'

import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductSchema, ProductSchemaInfer, ProductSchemaWithCheckedAndQuantityInfer } from '@/schemas'

const useCart = () => {
  const { payload, isLoading, error } = useFetch<ProductSchemaInfer[]>(API.CARTS, {
    schema: z.array(ProductSchema),
  })

  const [cartList, setCartList] = useState<ProductSchemaWithCheckedAndQuantityInfer[]>([])

  useEffect(() => {
    if (payload) {
      const newPayload = payload.map((product) => ({ ...product, checked: false, quantity: 1 }))

      setCartList(newPayload)
    }
  }, [payload])

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartList((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          if (quantity === 0) return { ...product, quantity: 1 }
          if (quantity === 21) return { ...product, quantity: 20 }
          return { ...product, quantity }
        } else {
          return product
        }
      }),
    )
  }

  const handleCheckedChange = (id: number, checked: boolean) => {
    setCartList((prev) =>
      prev.map((cart) => {
        if (cart.id === id) {
          return { ...cart, checked: !checked }
        } else {
          return cart
        }
      }),
    )
  }

  const handleAllCheckedChange = (checked: boolean) => {
    setCartList((prev) =>
      prev.map((cart) => {
        if (checked === true) return { ...cart, checked: true }
        return { ...cart, checked: false }
      }),
    )
  }

  const totalCartPrice = cartList.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

  const expectedPaymentAmount = cartList.reduce((acc, cur) => {
    if (cur.checked) {
      return acc + cur.price * cur.quantity
    } else {
      return acc
    }
  }, 0)

  return {
    cartList,
    isLoading,
    error,
    handleQuantityChange,
    handleCheckedChange,
    handleAllCheckedChange,
    totalCartPrice,
    expectedPaymentAmount,
  }
}

export default useCart
