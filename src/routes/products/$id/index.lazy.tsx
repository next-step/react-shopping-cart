import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { SwitchCase } from '@/common/components/SwitchCase/SwitchCase'
import { useCartListStore } from '@/routes/-common/store/cartListStore/cartListStore'

import { Product } from './-common/components/Product/Product'
import { ProductSkeleton } from './-common/components/ProductSkeleton/ProductSkeleton'
import type { Product as ProductResponse } from './-product-item.api'
import { getProduct } from './-product-item.api'

export const Route = createFileRoute('/products/$id/')({
  parseParams: (params) => ({ id: Number(params.id) }),
  component: ProductDetail,
})

function ProductDetail() {
  const { id } = Route.useParams()

  const { data, status } = useQuery<ProductResponse>({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })

  const { actions } = useCartListStore()

  return (
    <SwitchCase
      value={status}
      cases={{
        success: data ? <Product {...data} saveProduct={actions.saveProduct} /> : null,
        pending: <ProductSkeleton />,
        error: <div>error</div>,
      }}
    />
  )
}
