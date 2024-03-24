import { createFileRoute } from '@tanstack/react-router'
import ProductList from '../components/ProductList'

export const Route = createFileRoute('/list')({
  component: () => <ProductList />,
})
