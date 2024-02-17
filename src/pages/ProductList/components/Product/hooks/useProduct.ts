import { useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { useMutation } from '@/hooks'
import { Product } from '@/types'

const useProduct = () => {
  const navigate = useNavigate()
  const cartMutation = useMutation(API.CARTS, 'POST')
  const handleCartButtonClick = async (cart: Product) => {
    await cartMutation.mutate({ cart: { ...cart } })
    alert('장바구니에 추가되었습니다!')
  }
  const goToProductDetail = (id: number) => {
    sessionStorage.setItem('productId', id.toString())
    navigate(`/detail/${id}`)
  }
  return { handleCartButtonClick, goToProductDetail }
}

export default useProduct
