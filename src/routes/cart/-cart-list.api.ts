export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

export type CartListResponse = {
  list: Array<Product & { count: number }>
}

/**
 * @summary 카트목록 API
 */
export const getCartList = async (): Promise<CartListResponse> => {
  const response = await fetch('/carts')

  if (!response.ok) {
    throw new Error('failed to getProductList')
  }

  return response.json()
}
