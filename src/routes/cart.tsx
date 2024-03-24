import { createFileRoute } from '@tanstack/react-router'
import Carts from '../components/Carts'

export const Route = createFileRoute('/cart')({
  component: () => <Carts />,
})
