import { ReactNode } from "react";

export const CartLeftLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-3/5 flex-col flex mt-12">{children}</div>;
};
