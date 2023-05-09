import React from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { Product } from "../store/store";
import { deleteAll, selectAll, selectItem } from "../store/cartSlice";
import { setIsModalOpen, setModalMessage } from "../store/modalSlice";

const useCart = () => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const selectItem = (product: Product) => {
    return;
  };
  const selectAllItems = () => {
    dispatch(selectAll());
  };

  const deleteItem = () => {
    return;
  };
  const deleteAllItems = () => {
    dispatch(setIsModalOpen(true));
    dispatch(setModalMessage("deleteAll"));
    dispatch(deleteAll());
  };

  const getTotalAmount = (products: Product[]) => {
    const amounts = products.reduce((prev, next) => {
      if (next.isChecked) {
        return prev + next.quantity;
      } else {
        return prev;
      }
    }, 0);
    return amounts;
  };
  const getTotalPrice = (products: Product[]) => {
    const total = products.reduce((a, b) => {
      if (b.isChecked) {
        return a + b.price * b.quantity;
      } else {
        return a;
      }
    }, 0);
    return total;
  };

  return {
    selectItem,
    selectAllItems,
    deleteAllItems,
    deleteItem,
    getTotalPrice,
    getTotalAmount,
  };
};

export default useCart;
