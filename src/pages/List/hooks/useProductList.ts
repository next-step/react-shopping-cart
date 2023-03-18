import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductType } from '@/types'

const useProductList = () => {
  const { payload: products, isLoading, isError } = useFetch<ProductType[]>(API.PRODUCTS)

  return { products, isLoading, isError }
}

export default useProductList
