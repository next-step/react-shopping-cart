import { useMutation } from "@tanstack/react-query";
import addCartList from "../api/cart/addCartList";

export const useAddCartMutation = () => {
  return useMutation({ mutationFn: addCartList });
};
