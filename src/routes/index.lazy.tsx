import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { ProductList } from './-common/components/ProductList/ProductList'

const homeSearchSchema = z.object({
  page: z.number().catch(1),
})

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: homeSearchSchema.parse,
})

function Home() {
  return (
    <>
      <ProductList />
    </>
  )
}
