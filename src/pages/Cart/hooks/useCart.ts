import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductType } from '@/types'

const useCart = () => {
  const { payload: cartList, isLoading, isError } = useFetch<ProductType[]>(API.CARTS)

  return { cartList, isLoading, isError }
}

export default useCart
