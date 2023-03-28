const BASE_URL = './product-list'

export const productApi = async (): Promise<ProductItem[]> => {
  const data = await fetch(BASE_URL).then((res) => res.json())
  return data
}
