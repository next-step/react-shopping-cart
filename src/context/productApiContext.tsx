import { createContext, PropsWithChildren, useContext } from 'react'
import React from 'react'
import { ProductClientType, productHttpClient } from '../api/productHttpClient'

type ProductApiContextProps = {
  productHttpClient: ProductClientType | null
}

export const ProductApiContext = createContext<ProductApiContextProps>({
  productHttpClient: null,
})

export const ProductApiProvder: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProductApiContext.Provider value={{ productHttpClient }}>
      {children}
    </ProductApiContext.Provider>
  )
}

export const useProductApi = () => useContext(ProductApiContext)
