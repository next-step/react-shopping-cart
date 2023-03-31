import { useMutation, useQuery } from 'react-query';
import { atom, useSetRecoilState } from 'recoil';
import { addCart, deleteCart, getCarts } from 'services/cart';
import { MAX_QUANTITY, MIN_QUANTITY } from 'constant';

const CART = 'cart'

export const cartsState = atom<UserCart[]>({
  key: 'selectCartsState',
  default: [] as UserCart[]
});

export function useCart() {

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
      deleteCart(cartId.toString());
    });
  }

  const deleteCartItem = async (itemId: string) => {
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

export function useCartList() {
  return useQuery(CART, getCarts);
}

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