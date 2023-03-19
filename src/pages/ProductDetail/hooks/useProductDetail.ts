import { useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { useFetch, useMutation, useProductInfo } from '@/hooks'
import { Product } from '@/types'

const useProductDetail = () => {
  const navigate = useNavigate()
  const { getProductId } = useProductInfo()

  const {
    payload: productDetail,
    isLoading,
    error,
  } = useFetch<Product>(API.PRODUCT(getProductId()), { enabled: !!getProductId() })
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
