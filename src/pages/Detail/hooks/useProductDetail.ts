import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '@/config'
import { ProductType } from '@/types'

const useProductDetail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState<ProductType>()

  useEffect(() => {
    fetch(API.PRODUCT(Number(id)))
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
  }, [id])

  return { ...productDetail }
}

export default useProductDetail
