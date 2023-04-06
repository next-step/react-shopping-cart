import React from 'react'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'

export const PRODUCTS_PATH = {
  PRODUCTS: '/products',
  PRODUCT: '/product/:productId',
} as const

export const productsRouter = [
  { path: PRODUCTS_PATH.PRODUCTS, element: <Products /> },
  { path: PRODUCTS_PATH.PRODUCT, element: <ProductDetail /> },
]
