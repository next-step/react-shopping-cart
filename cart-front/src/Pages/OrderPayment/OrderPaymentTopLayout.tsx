import { ReactNode } from "react";

export const OrderPaymentTopLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className=" w-full">{children}</div>;
};
