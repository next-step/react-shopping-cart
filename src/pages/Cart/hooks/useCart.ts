import { z } from 'zod'

import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductSchema, ProductSchemaInfer } from '@/schemas'

const useCart = () => {
  const {
    payload: cartList,
    isLoading,
    error,
  } = useFetch<ProductSchemaInfer[]>(API.CARTS, {
    schema: z.array(ProductSchema),
  })

  return { cartList, isLoading, error }
}

export default useCart
