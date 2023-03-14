import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '@/config'
import { ProductType } from '@/types'

const useProductDetail = () => {
  const { id } = useParams()
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

  return { ...productDetail, hasSelectedProduct }
}

export default useProductDetail
