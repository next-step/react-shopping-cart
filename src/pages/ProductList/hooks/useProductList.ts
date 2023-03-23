import { z } from 'zod'

import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductSchema, ProductSchemaInfer } from '@/schemas'

const useProductList = () => {
  const {
    payload: products,
    isLoading,
    error,
  } = useFetch<ProductSchemaInfer[]>(API.PRODUCTS, {
    schema: z.array(ProductSchema),
  })

  return { products, isLoading, error }
}

export default useProductList
