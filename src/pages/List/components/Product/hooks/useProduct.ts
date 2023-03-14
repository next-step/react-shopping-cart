import { useNavigate } from 'react-router-dom'

const useProduct = () => {
  const navigate = useNavigate()
  const addCart = () => {
    // 카트 추가 로직 필요
    alert('장바구니에 추가되었습니다!')
  }
  const goToProductDetail = (id: number) => {
    sessionStorage.setItem('productId', id.toString())
    navigate(`detail/${id}`)
  }
  return { addCart, goToProductDetail }
}

export default useProduct
