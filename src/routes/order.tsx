import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order')({
  component: () => <div>Hello /!</div>,
})
