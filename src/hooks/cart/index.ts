import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { addCart, deleteCart, getCarts } from 'services/cart';
import { CartItem, ProductItem } from 'types/type';

const CART = 'cart'

export function useCart() {
  const [carts, setCarts] = useState<CartItem[]>([]);

  console.log("testtest")
  const addTempCart = (checked: boolean, item: any, quantity?: number) => {
    if (checked) {
      console.log("if :: ", checked)
      setCarts((prevTempCartState) => [
        ...prevTempCartState,
        {
          id: item.id,
          product: {
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            price: item.price
          },
          quantity: quantity ? quantity : 1,
          checked
        },
      ]);
    } else {
      setCarts((prevTempCartState) => {
        const updatedTempCartItems = prevTempCartState.filter(
          (tempCartItem) => tempCartItem.id !== item.id
        );
        return updatedTempCartItems;
      })
    }
  }

  const addTempAllCart = (checked: boolean, items: any) => {
    console.log("checked :: ", checked)
    if (checked) {
      setCarts(items)
    } else {
      setCarts([]);
    }
  }

  return { carts, setCarts, addTempCart, addTempAllCart };
}

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
