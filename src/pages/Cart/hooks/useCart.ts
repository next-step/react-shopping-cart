import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductType } from '@/types'

const useCart = () => {
  const { payload: cartList, isLoading, error } = useFetch<ProductType[]>(API.CARTS)

  return { cartList, isLoading, error }
}

export default useCart
