import { useMutation, useQuery } from 'react-query';
import { addCart, deleteCart, getCarts } from 'services/cart';
import { ProductItem } from 'types/type';

const CART = 'cart'

export function useCartList() {
  return useQuery(CART, getCarts);
}

export function useAddCart() {
  return useMutation((item: ProductItem) => addCart(item), {
    onSuccess: (newCartItem) => {
      console.log("success", newCartItem)
    },
    onError: (error: Error) => {
      throw new Error(`Failed to add cart item: ${error.message}`);
    },
  });
}

export function useDeleteCart() {

  const deleteCartItem = async (itemId: number) => {
    deleteCart(itemId);
  }

  return { deleteCartItem }
};
