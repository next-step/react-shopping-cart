import { atom, useSetRecoilState } from 'recoil';
import { deleteCart } from 'services/cart';
import { MAX_QUANTITY, MIN_QUANTITY } from 'constant';

export const cartsState = atom<UserCart[]>({
  key: 'selectCartsState',
  default: [] as UserCart[]
});

type UserCartType = {
  selectCart: (item: UserCart) => void;
  setAllChecked: (checked: boolean, items: UserCart[]) => void;
  setCarts: (items: UserCart[]) => void;
  deleteCartItem: (itemId: number) => void;
  deleteCartItems: (items: UserCart[]) => void;
  increaseCartItemQuantity: (itemId: number) => void;
  decreaseCartItemQuantity: (itemId: number) => void;
};

export function useCart(): UserCartType {
  // TODO useState
  const setUserCartsState = useSetRecoilState(cartsState)

  const selectCart = (item: UserCart) => {
    setUserCartsState((prevState) =>
      prevState.map((cart: UserCart) => {
        return cart.id === item.id
          ? { ...cart, checked: !cart.checked }
          : cart;
      })
    );
  }

  const setCarts = (items: UserCart[]) => {
    setUserCartsState(items);
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
  }

  const deleteCartItem = async (itemId: number) => {
    deleteCart(itemId);
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

  return { selectCart, setAllChecked, setCarts, deleteCartItem, deleteCartItems, increaseCartItemQuantity, decreaseCartItemQuantity };
}

