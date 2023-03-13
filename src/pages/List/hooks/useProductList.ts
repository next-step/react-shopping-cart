import { useState, useEffect } from 'react'

import { ProductType } from '@/types'

const useProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return { products }
}

export default useProductList
