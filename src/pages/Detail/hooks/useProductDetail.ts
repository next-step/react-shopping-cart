import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { API } from '@/config'
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

  const addCart = (product: ProductType) => {
    fetch(API.CARTS, {
      method: 'POST',
      body: JSON.stringify({ product: { ...product } }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }
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
