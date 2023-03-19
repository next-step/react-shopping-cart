import { createContext, PropsWithChildren, useContext } from 'react'
import React from 'react'
import { ProductClientType, productHttpClient } from '../api/productHttpClient'
import { CartHttpClientType, cartHttpClient } from '../api/cartHttpClient'
import { OrderHttpClientType, ordersHttpClient } from '../api/ordersHttpClient'

type ProductApiContextProps = {
  productHttpClient: ProductClientType | null
  cartHttpClient: CartHttpClientType | null
  ordersHttpClient: OrderHttpClientType | null
}

export const ProductApiContext = createContext<ProductApiContextProps>({
  productHttpClient: null,
  cartHttpClient: null,
  ordersHttpClient: null,
})

export const ProductApiProvder: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProductApiContext.Provider
      value={{ productHttpClient, cartHttpClient, ordersHttpClient }}
    >
      {children}
    </ProductApiContext.Provider>
  )
}

export const useProductApi = () => useContext(ProductApiContext)
