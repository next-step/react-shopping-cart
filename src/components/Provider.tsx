import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
