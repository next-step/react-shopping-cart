import { deleteCart } from 'services/cart';
import { MAX_QUANTITY, MIN_QUANTITY } from 'constant';
import { useState } from 'react';

type UserCartType = {
  userCartsState: UserCart[];
  setUserCartsState: (items: UserCart[]) => void;
  selectCart: (item: UserCart) => void;
  setAllChecked: (checked: boolean, items: UserCart[]) => void;
  deleteCartItem: (itemId: number) => void;
  deleteCartItems: (items: UserCart[]) => void;
  increaseCartItemQuantity: (itemId: number) => void;
  decreaseCartItemQuantity: (itemId: number) => void;
};

export function useCart(): UserCartType {
  const [userCartsState, setUserCartsState] = useState<UserCart[]>([]);
  const selectCart = (item: UserCart) => {
    setUserCartsState((prevState) =>
      prevState.map((cart) => {
        return cart.id === item.id ? { ...cart, checked: !cart.checked } : cart;
      })
    );
  }

  const setAllChecked = (checked: boolean, items: UserCart[]) => {
    setUserCartsState(items.map((cart: UserCart) => ({ ...cart, checked: checked })));
  }

  const deleteCartItems = async (items: UserCart[]) => {
    const deleteIds = items
      .filter(item => item.checked)
      .map(checkItems => checkItems.id)

    deleteIds.forEach((cartId) => {
      deleteCart(cartId);
    });
    setUserCartsState((prevState) => prevState.filter((cart) => !deleteIds.includes(cart.id)));
  }

  const deleteCartItem = async (itemId: number) => {
    deleteCart(itemId);
    setUserCartsState((prevState) => prevState.filter((cart) => cart.id !== itemId));
  }

  const increaseCartItemQuantity = (itemId: number) => {
    setUserCartsState((prevState) =>
      prevState.map((cart) => {
        return cart.id === itemId
          ? { ...cart, quantity: (cart.quantity === 20 ? MAX_QUANTITY : cart.quantity + 1) }
          : cart;
      })
    );
  }

  const decreaseCartItemQuantity = (itemId: number) => {
    setUserCartsState((prevState) =>
      prevState.map((cart) => {
        return cart.id === itemId
          ? { ...cart, quantity: (cart.quantity === 1 ? MIN_QUANTITY : cart.quantity - 1) }
          : cart;
      })
    );
  }

  return { userCartsState, setUserCartsState, selectCart, setAllChecked, deleteCartItem, deleteCartItems, increaseCartItemQuantity, decreaseCartItemQuantity };
}

