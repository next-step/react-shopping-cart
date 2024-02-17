import { useParams } from 'react-router-dom'

const useProductInfo = () => {
  const { id } = useParams()

  const getProductId = () => {
    if (id === '0') {
      return Number(id)
    }
    if (id && id !== 'null') {
      return Number(id)
    }
    if (sessionStorage.getItem('productId')) {
      return Number(sessionStorage.getItem('productId'))
    }
    return null
  }

  return { getProductId }
}

export default useProductInfo
