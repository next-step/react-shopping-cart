import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { useContext } from 'react'
import CartsProvider, { CartsContext } from './context/cartsContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    myOrder: {
      carts: [],
      order: [],
    },
  },
})

// Create a client
const queryClient = new QueryClient()

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
function App() {
  const myOrder = useContext(CartsContext)
  return (
    <QueryClientProvider client={queryClient}>
      <CartsProvider>
        <RouterProvider router={router} context={{ myOrder }} />
      </CartsProvider>
    </QueryClientProvider>
  )
}

export default App
