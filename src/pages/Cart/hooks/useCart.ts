import { useState, useEffect } from 'react'

import { API } from '@/config'
import { ProductType } from '@/types'

const useCart = () => {
  const [cartList, setCartList] = useState<ProductType[]>([])
  useEffect(() => {
    fetch(API.CARTS)
      .then((response) => response.json())
      .then((data) => setCartList(data))
  }, [])
  return { cartList }
}

export default useCart
