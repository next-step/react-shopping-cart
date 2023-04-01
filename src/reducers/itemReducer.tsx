import React from "react";
import { Reducer, AnyAction } from "redux";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type List = Product[];

const itemReducer: Reducer<List, AnyAction> = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((element) => element.id !== action.payload.id);
    default:
      return state;
  }
};

export default itemReducer;
