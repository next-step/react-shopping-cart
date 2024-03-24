import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/common/Header'
import Layout from '../layout/Layout'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </>
  ),
})
