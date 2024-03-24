import { Link, Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router'
import Header from '../components/common/Header'
import Layout from '../layout/Layout'
import { MyOrder } from '../context/cartsContext'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

interface RouterContext {
  myOrder: MyOrder
}
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  ),
})
