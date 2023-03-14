import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { addCart } from '@/domains'
import { ProductType } from '@/types'

const useProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [productDetail, setProductDetail] = useState<ProductType>()
  const [hasSelectedProduct, setHasSelectedProduct] = useState(true)

  useEffect(() => {
    const productId = id || sessionStorage.getItem('productId')

    if (!productId) {
      setHasSelectedProduct(false)
      return
    }

    fetch(API.PRODUCT(Number(productId)))
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
  }, [id])

  const goToCartPage = () => {
    navigate('/cart')
  }

  const handleCartButtonClick = (product: ProductType) => {
    addCart(product)
    goToCartPage()
  }

  return { productDetail, hasSelectedProduct, handleCartButtonClick }
}

export default useProductDetail
