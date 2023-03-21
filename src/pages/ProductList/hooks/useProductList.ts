import { useState } from 'react'

import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductListSchemaInfer, ProductListSchema } from '@/schemas'

type NumericString = keyof Record<string, number>

const useProductList = () => {
  const [page, setPage] = useState('1')
  const [perPage, setPerPage] = useState('10')

  const changePage = (page: NumericString) => {
    setPage(page)
  }

  const changePerPage = (perPage: NumericString) => {
    setPerPage(perPage)
  }

  const {
    payload: productListPayload,
    isLoading,
    error,
  } = useFetch<ProductListSchemaInfer>(`${API.PRODUCTS}?page=${page}&perPage=${perPage}`, {
    schema: ProductListSchema,
  })

  const pageArray = new Array(productListPayload?.totalPage).fill(null).map((_, index) => index + 1)

  return { productListPayload, isLoading, error, changePage, changePerPage, pageArray }
}

export default useProductList
