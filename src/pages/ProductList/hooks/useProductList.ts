import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { API } from '@/config'
import { useFetch } from '@/hooks'
import { ProductListSchemaInfer, ProductListSchema } from '@/schemas'

type NumericString = keyof Record<string, number>

const useProductList = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const pageParam = searchParams.get('page')
  const perPageParam = searchParams.get('perPage')
  const navigate = useNavigate()

  const [page, setPage] = useState(pageParam || '1')
  const [perPage, setPerPage] = useState(perPageParam || '10')

  useEffect(() => {
    if (pageParam) {
      setPage(pageParam)
    }

    if (perPageParam) {
      setPerPage(perPageParam)
    }
  }, [pageParam, perPageParam])

  const changePage = (newPage: NumericString) => {
    navigate(`?page=${newPage}&perPage=${perPage}`)
  }

  const changePerPage = (newPerPage: NumericString) => {
    navigate(`?page=${page}&perPage=${newPerPage}`)
  }

  const {
    payload: productListPayload,
    isLoading,
    error,
  } = useFetch<ProductListSchemaInfer>(`${API.PRODUCTS}?page=${page}&perPage=${perPage}`, {
    schema: ProductListSchema,
  })

  const pageArray = new Array(productListPayload?.totalPage)
    .fill(null)
    .map((_, index) => ({ page: index + 1, isSelectedPage: Number(page) === index + 1 }))

  return { productListPayload, isLoading, error, changePage, changePerPage, pageArray }
}

export default useProductList
