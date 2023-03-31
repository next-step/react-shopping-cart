import { useMutation } from "react-query";
import { addCart } from "services/cart";

export function useAddCart() {
  return useMutation((item: Product) => addCart(item), {
    onSuccess: (newCartItem) => {
      console.log("success", newCartItem)
    },
    onError: (error: Error) => {
      throw new Error(`Failed to add cart item: ${error.message}`);
    },
  });
}