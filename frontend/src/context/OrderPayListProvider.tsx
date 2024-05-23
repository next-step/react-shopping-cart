import { PropsWithChildren, createContext, useState } from "react";

import { OrderPayDetail, ProductDetail } from "../types";

type InitialOrderPayList = {
  getOrderPayList: () => OrderPayDetail[];
  addProductToOrderPayList: (product: ProductDetail, quantity: number) => void;
  updateProductInOrderPayList: (
    product: ProductDetail,
    quantity: number
  ) => void;
  deleteProductFromOrderPayList: (id: number) => void;
  totalPrice: number;
  updateTotalPrice: (price: number, quantity: number) => number;
};

const initialOrderPayList: InitialOrderPayList = {
  getOrderPayList: () => [],
  addProductToOrderPayList: () => null,
  updateProductInOrderPayList: () => null,
  deleteProductFromOrderPayList: () => null,
  totalPrice: 0,
  updateTotalPrice: () => 0,
};

export const OrderPayListContext = createContext(initialOrderPayList);

export default function OrderPayListProvider({ children }: PropsWithChildren) {
  const [orderPayList, setOrderPayList] = useState<OrderPayDetail[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getOrderPayList = (): OrderPayDetail[] => {
    return orderPayList;
  };

  const addProductToOrderPayList = (
    product: ProductDetail,
    quantity: number
  ) => {
    setOrderPayList((preOrderList) => [
      ...preOrderList,
      { ...product, quantity },
    ]);
  };

  const updateProductInOrderPayList = (
    product: ProductDetail,
    quantity: number
  ) => {
    const newOrderPayList = orderPayList.map((preProduct) =>
      preProduct.id != product.id ? preProduct : { ...product, quantity }
    );
    setOrderPayList(newOrderPayList);
  };

  const deleteProductFromOrderPayList = (id: number) => {
    setOrderPayList(orderPayList.filter((preProduct) => preProduct.id != id));
  };

  const updateTotalPrice = (price: number, quantity: number): number => {
    setTotalPrice(totalPrice + price * quantity);
    return totalPrice;
  };

  return (
    <OrderPayListContext.Provider
      value={{
        getOrderPayList,
        addProductToOrderPayList,
        updateProductInOrderPayList,
        deleteProductFromOrderPayList,
        totalPrice,
        updateTotalPrice,
      }}
    >
      {children}
    </OrderPayListContext.Provider>
  );
}
