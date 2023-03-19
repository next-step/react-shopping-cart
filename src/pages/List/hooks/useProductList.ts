import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductType } from '@/types'

const useProductList = () => {
  const { payload: products, isLoading, error } = useFetch<ProductType[]>(API.PRODUCTS)

  return { products, isLoading, error }
}

export default useProductList
