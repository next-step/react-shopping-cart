import { createContext, PropsWithChildren, useContext } from 'react'
import React from 'react'
import { ProductClientType, productHttpClient } from '../api/productHttpClient'
import { CartHttpClientType, cartHttpClient } from '../api/cartHttpClient'

type ProductApiContextProps = {
  productHttpClient: ProductClientType | null
  cartHttpClient: CartHttpClientType | null
}

export const ProductApiContext = createContext<ProductApiContextProps>({
  productHttpClient: null,
  cartHttpClient: null,
})

export const ProductApiProvder: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProductApiContext.Provider value={{ productHttpClient, cartHttpClient }}>
      {children}
    </ProductApiContext.Provider>
  )
}

export const useProductApi = () => useContext(ProductApiContext)
