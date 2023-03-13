import { Outlet } from "react-router-dom";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>{children}</header>
      <Outlet />
    </>
  );
};

export default Layout;
