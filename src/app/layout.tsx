import { Header } from "@/components";
import type { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header className="w-dvw sticky top-0 h-16 z-10" />
      <main className="max-w-6xl m-auto px-4 py-8">{children}</main>
      <ReactQueryDevtools />
    </>
  );
};

export default Layout;
