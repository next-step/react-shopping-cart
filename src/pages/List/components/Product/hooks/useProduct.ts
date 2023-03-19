import { useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { useMutation } from '@/hooks'
import { ProductType } from '@/types'

const useProduct = () => {
  const navigate = useNavigate()
  const productMutation = useMutation(API.CARTS, 'POST')
  const handleCartButtonClick = async (product: ProductType) => {
    await productMutation.mutate({ product: { ...product } })
    alert('장바구니에 추가되었습니다!')
  }
  const goToProductDetail = (id: number) => {
    sessionStorage.setItem('productId', id.toString())
    navigate(`detail/${id}`)
  }
  return { handleCartButtonClick, goToProductDetail }
}

export default useProduct
