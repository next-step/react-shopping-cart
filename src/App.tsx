import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useSyncWithClientAndServer } from './hooks/common/useSyncWithClientAndServer';
import { routeTree } from './routeTree.gen';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
      <ReactQueryDevtools position='bottom' />
      <DataSyncer />
    </QueryClientProvider>
  );
}

const DataSyncer = () => {
  useSyncWithClientAndServer();
  return null;
};
