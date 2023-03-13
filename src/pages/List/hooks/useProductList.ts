import { useState, useEffect } from 'react'

import { API } from '@/config'
import { ProductType } from '@/types'

const useProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch(API.PRODUCTS)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return { products }
}

export default useProductList
