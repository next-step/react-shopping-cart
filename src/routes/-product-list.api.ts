export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

type Meta = {
  next_page?: number
}

type PageQuery = {
  page?: number
  perCount?: number
}

export type ProductListResponse = {
  list: Array<Product>
  meta: Meta
}

type ProductListParams = PageQuery

/**
 * @summary 상목목록 API
 */
export const getProductList = async ({
  page = 0,
  perCount = 15,
}: ProductListParams): Promise<ProductListResponse> => {
  const urlQueryParams = new URLSearchParams({
    page: page.toString(),
    perCount: perCount.toString(),
  })

  const response = await fetch(`/products` + `?${urlQueryParams.toString()}`)

  if (!response.ok) {
    throw new Error('failed to getProductList')
  }

  return response.json()
}
