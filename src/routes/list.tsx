import { createFileRoute } from '@tanstack/react-router'
import ProductList from '../components/Product'

export const Route = createFileRoute('/list')({
  component: () => <ProductList />,
})
