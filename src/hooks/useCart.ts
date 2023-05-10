import React from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { Product, setCurrentProduct } from "../store/cartSlice";
import { deleteAll, selectAll, selectProduct } from "../store/cartSlice";
import { setIsModalOpen, setModalMessage } from "../store/modalSlice";

const useCart = () => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const setCurrentItem = (product: Product) => {
    dispatch(setCurrentProduct(product));
  };

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

  const getTotalAmount = () => {
    const amounts = products.reduce((prev, next) => {
      if (next.isChecked) {
        return prev + next.quantity;
      } else {
        return prev;
      }
    }, 0);
    return amounts;
  };
  const getTotalPrice = () => {
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
    setCurrentItem,
    selectItem,
    selectAllItems,
    deleteAllItems,
    deleteItem,
    getTotalPrice,
    getTotalAmount,
  };
};

export default useCart;
