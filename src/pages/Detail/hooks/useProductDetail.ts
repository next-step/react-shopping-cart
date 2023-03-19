import { useParams, useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { useFetch, useMutation } from '@/hooks'
import { ProductType } from '@/types'

const useProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const productId = id || sessionStorage.getItem('productId') || null
  const {
    payload: productDetail,
    isLoading,
    error,
  } = useFetch<ProductType>(API.PRODUCT(Number(productId)), { enabled: !!productId })
  const productDetailMutation = useMutation(API.CARTS, 'POST')

  const goToCartPage = () => {
    navigate('/cart')
  }

  const handleCartButtonClick = async (product: ProductType) => {
    await productDetailMutation.mutate({ product: { ...product } })
    goToCartPage()
  }

  return { productDetail, handleCartButtonClick, isLoading, error }
}

export default useProductDetail
