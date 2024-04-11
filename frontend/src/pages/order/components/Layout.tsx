import { PropsWithChildren } from "react";
import Header from "../../../components/header/Header";

interface LayoutProps extends PropsWithChildren {
  title: string;
}
const Layout = ({ title, children }: LayoutProps) => {
  return (
    <section className="order-section">
      <Header>
        <h2 className="order-section__title">{title}</h2>
      </Header>
      {children}
    </section>
  );
};

export default Layout;
