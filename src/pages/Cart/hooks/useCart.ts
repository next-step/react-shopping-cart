import { API } from '@/config'
import { useFetch } from '@/hooks'
import { Product } from '@/types'

const useCart = () => {
  const { payload: cartList, isLoading, error } = useFetch<Product[]>(API.CARTS)

  return { cartList, isLoading, error }
}

export default useCart
