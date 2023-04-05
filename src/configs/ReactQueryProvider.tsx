import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: PropsWithChildren<{ [key: string]: any }>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
