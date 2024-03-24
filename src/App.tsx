import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { useContext } from 'react'
import CartsProvider, { CartsContext } from './context/cartsContext'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    myOrder: undefined!, //cartsProvider로 포장한 후 설정?
  },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
function App() {
  const myOrder = useContext(CartsContext)
  return (
    <CartsProvider>
      <RouterProvider router={router} context={{ myOrder }} />
    </CartsProvider>
  )
}

export default App
