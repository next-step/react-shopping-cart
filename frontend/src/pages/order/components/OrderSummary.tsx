import React from "react";
import { PropsWithChildren } from "react";

const OrderSummary = ({ children }: PropsWithChildren) => {
  return <div className="order-list">{children}</div>;
};

export default OrderSummary;
