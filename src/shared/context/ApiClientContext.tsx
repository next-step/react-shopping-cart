import { createContext, PropsWithChildren, useContext } from 'react'
import React from 'react'
import {
  ProductClientType,
  productHttpClient,
} from 'products/api/productHttpClient'
import { CartHttpClientType, cartHttpClient } from 'carts/api/cartHttpClient'
import {
  OrderHttpClientType,
  ordersHttpClient,
} from 'orders/api/ordersHttpClient'

type ApiClientContextProps = {
  productHttpClient: ProductClientType | null
  cartHttpClient: CartHttpClientType | null
  ordersHttpClient: OrderHttpClientType | null
}

export const ApiClientContext = createContext<ApiClientContextProps>({
  productHttpClient: null,
  cartHttpClient: null,
  ordersHttpClient: null,
})

export const ApiClientProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ApiClientContext.Provider
      value={{ productHttpClient, cartHttpClient, ordersHttpClient }}
    >
      {children}
    </ApiClientContext.Provider>
  )
}

export const useApiClient = () => useContext(ApiClientContext)
