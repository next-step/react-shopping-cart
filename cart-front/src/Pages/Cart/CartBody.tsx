import { ReactNode } from "react";

export const CartBodyLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-row px-6">{children}</div>;
};
