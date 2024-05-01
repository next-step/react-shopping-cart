import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Gnb } from './-common/components/Gnb/Gnb'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <TanStackRouterDevtools />
      <Gnb />
      <ScrollRestoration />
      <Outlet />
    </>
  ),
})
