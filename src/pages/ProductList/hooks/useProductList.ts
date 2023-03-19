import { API } from '@/config'
import { useFetch } from '@/hooks'
import { Product } from '@/types'

const useProductList = () => {
  const { payload: products, isLoading, error } = useFetch<Product[]>(API.PRODUCTS)

  return { products, isLoading, error }
}

export default useProductList
