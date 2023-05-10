import React from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MODAL_QUESTIONS } from "../constants/messages";

type ModalStateType = {
  type: string;
  isOpen: boolean;
  message: string;
};

const initialState: ModalStateType = {
  type: "",
  isOpen: false,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalOpen: (state: ModalStateType, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setModalType: (state, action) => {
      state.type = action.payload;
    },
    setModalMessage: (state: ModalStateType, action: PayloadAction<string>) => {
      state.type = action.payload;
      switch (state.type) {
        case "add":
          state.message = MODAL_QUESTIONS.ADD_ITEM_TO_CART;
          break;
        case "delete":
          state.message = MODAL_QUESTIONS.DELETE_ITEM_FROM_CART;
          break;
        case "deleteAll":
          state.message = MODAL_QUESTIONS.DELETE_ALL_ITEMS;
          break;
        case "order":
          state.message = MODAL_QUESTIONS.ORDER_SELECTED_ITEMS;
          break;
        default:
          break;
      }
    },
  },
});
export const { setIsModalOpen, setModalType, setModalMessage } =
  modalSlice.actions;
export default modalSlice;
