import './index.css'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { RenderPropsList } from '@/common/components/RenderPropsList/RenderPropsList'
import { Skeleton } from '@/common/components/Skeleton/Skeleton'
import { SwitchCase } from '@/common/components/SwitchCase/SwitchCase'
import type { ProductListResponse } from '@/routes/-product-list.api'
import { getProductList } from '@/routes/-product-list.api'

import { MoreButton } from '../MoreButton/MoreButton'
import { ProductCard } from '../ProductCard/ProductCard'

/**
 * @summary 상품목록 컴포넌트
 */
export const ProductList = () => {
  const { ref, inView } = useInView()
  const { data, status, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['/products'],
    queryFn: ({ pageParam }) => {
      return getProductList({
        page: pageParam,
      })
    },
    initialPageParam: 0,
    getNextPageParam: (res: ProductListResponse) => res.meta.next_page,
    staleTime: 1000 * 60 * 3,
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  const flattedProductList = data?.pages.flatMap((group) => group.list)

  return (
    <>
      <SwitchCase
        value={status}
        cases={{
          success: (
            <>
              <RenderPropsList
                list={flattedProductList ?? []}
                renderItem={(props) => <ProductCard {...props} />}
                className="product-container2"
              />

              <MoreButton
                ref={ref}
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? '더보기'
                  : hasNextPage
                    ? 'loading..'
                    : '더이상 상품이 존재하지 않습니다.'}
              </MoreButton>
            </>
          ),
          pending: (
            <RenderPropsList
              list={Array.from({ length: 6 }, (_, i) => ({
                id: i,
              }))}
              renderItem={() => <Skeleton />}
              className=" product-container2"
            />
          ),
          error: <>error</>,
        }}
      />
    </>
  )
}
