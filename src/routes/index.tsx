import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div>Hello /!</div>,
  loader: () => {
    throw redirect({
      to: '/list',
    })
  },
})
