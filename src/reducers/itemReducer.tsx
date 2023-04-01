import React from "react";
import { Reducer, AnyAction } from "redux";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

// [질문1] 주석과 같이 Action 타입을 줬는데 에러가 났습니다. redux에서 제공하는 AnyAction 타입을 주어 해결했지만, 타입 추론이 되지 않아 좋은 해결책으로 보이지 않습니다. 에러 이유와 더 나은 솔루션은 없는지에 대해 고민해봤지만 답을 얻을 수 없었습니다. 혹시 이에 대해 리뷰어님의 의견이 있으신지 궁금합니다.
// type AddItemAction = {
//   type: "ADD_ITEM";
//   payload: Product;
// };
// type RemoveItemAction = {
//   type: "REMOVE_ITEM";
//   payload: Product;
// };
// type Action = AddItemAction | RemoveItemAction;

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
