import { useNavigate } from 'react-router-dom'

import { addCart } from '@/domains'
import { ProductType } from '@/types'

const useProduct = () => {
  const navigate = useNavigate()
  const handleCartButtonClick = (product: ProductType) => {
    addCart(product)
    alert('장바구니에 추가되었습니다!')
  }
  const goToProductDetail = (id: number) => {
    sessionStorage.setItem('productId', id.toString())
    navigate(`detail/${id}`)
  }
  return { handleCartButtonClick, goToProductDetail }
}

export default useProduct
