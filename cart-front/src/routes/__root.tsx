import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../Components/Header/Header";
import { ScrollRestoration } from "@tanstack/react-router";
import { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
  className?: string;
}
export const ProductLayout = ({ children }: ProductLayoutProps) => {
  return <div className="gap-5 p-12 px-60">{children}</div>;
};

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Header />
        <Outlet />
        <ScrollRestoration getKey={(location) => location.pathname} />
        <TanStackRouterDevtools />
      </>
    );
  },
});
