import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";
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
      alert(action.payload);
      state.isOpen = action.payload;
    },
    setModalMessage: (state: ModalStateType, action: PayloadAction<string>) => {
      state.type = action.payload;
      switch (state.type) {
        case "add":
          state.message = MODAL_QUESTIONS.ADD_ITEM_TO_CART;
          break;
        default:
          break;
      }
    },
  },
});
export const { setIsModalOpen, setModalMessage } = modalSlice.actions;
export default modalSlice;
