import { createFileRoute } from '@tanstack/react-router'
import OrderList from '../components/Order'

export const Route = createFileRoute('/order')({
  component: () => <OrderList />,
})
