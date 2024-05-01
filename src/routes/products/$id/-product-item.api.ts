export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

/**
 * @summary 상목목록 API
 */
export const getProduct = async (id: number) => {
  const response = await fetch(`/products/${id}`)

  if (!response.ok) {
    throw new Error('failed to getProduct')
  }

  return response.json()
}
