import { useParams, useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { useFetch, useMutation } from '@/hooks'
import { Product } from '@/types'

const useProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const productId = id || sessionStorage.getItem('productId') || null
  const {
    payload: productDetail,
    isLoading,
    error,
  } = useFetch<Product>(API.PRODUCT(Number(productId)), { enabled: !!productId })
  const productDetailMutation = useMutation(API.CARTS, 'POST')

  const goToCartPage = () => {
    navigate('/cart')
  }

  const handleCartButtonClick = async (product: Product) => {
    await productDetailMutation.mutate({ product: { ...product } })
    goToCartPage()
  }

  return { productDetail, handleCartButtonClick, isLoading, error }
}

export default useProductDetail
