import { ProductListResponse } from '@/routes/-product-list.api'

import products from './products.db.json'
export const productsRepository = new Map<number, ProductListResponse['list'][number]>(
  products.map((product) => [product.id, product])
)
