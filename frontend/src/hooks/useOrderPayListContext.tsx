import { useContext } from "react";

import { OrderPayListContext } from "../context/OrderPayListProvider";

export const useOrderPayListContext = () => {
  const context = useContext(OrderPayListContext);

  if (!context) {
    throw new Error("Cannot find CardContext");
  }

  return context;
};
