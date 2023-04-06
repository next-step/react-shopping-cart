import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { minute } from '@/utils/time';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: minute(3),
      cacheTime: minute(3),
    },
  },
});

export function ReactQueryProvider({ children }: PropsWithChildren<{ [key: string]: any }>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
