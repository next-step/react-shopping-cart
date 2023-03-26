import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { atom, useSetRecoilState } from 'recoil';
import { addCart, deleteCart, getCarts } from 'services/cart';
import { CartItem, ProductItem } from 'types/type';

const CART = 'cart'

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [] as CartItem[]
});

export const tempCartState = atom<CartItem[]>({
  key: 'tempCartState',
  default: [] as CartItem[]
});

interface CartItems {
  getCartItems: UseQueryResult<CartItem[], unknown>;
  addCartItem: UseMutationResult<CartItem, Error, ProductItem, unknown>;
  addShopingCart: (addAble: boolean, item: CartItem) => void;
  updateCartQuantity: (itemId: number, quantity: number) => void;
  deleteCartItem: (itemId: number) => void;
}

export function useCart(): CartItems {

  const setCartState = useSetRecoilState(cartState);
  const setTempCartState = useSetRecoilState(tempCartState);

  const getCartItems = useQuery([CART], async () => {
    const cartItems = await getCarts();
    setCartState(cartItems);
    return cartItems;
  })

  const addCartItem = useMutation((item: ProductItem) => addCart(item), {
    onSuccess: (newCartItem) => {
      setCartState((oldCartItems) => [...oldCartItems, newCartItem]);
    },
    onError: (error: Error) => {
      throw new Error(`Failed to add cart item: ${error.message}`);
    },
  });

  const addShopingCart = (addAble: boolean, item: CartItem) => {
    if (addAble) {
      setTempCartState((prevTempCartState) => [
        ...prevTempCartState,
        {
          ...item,
          totalPrice: item.product.price * (item.quantity ? item.quantity : 1),
        },
      ]);
    } else {
      setTempCartState((prevTempCartState) => {
        const updatedTempCartItems = prevTempCartState.filter(
          (tempCartItem) => tempCartItem.id !== item.id
        );
        return updatedTempCartItems;
      });
    }
  };

  const updateCartQuantity = (itemId: number, quantity: number) => {
    setTempCartState((prevTempCartState) => {
      const updatedTempCartItems = prevTempCartState.map((tempCartItem) => {
        if (tempCartItem.id === itemId) {
          return {
            ...tempCartItem,
            quantity: quantity,
            totalPrice: tempCartItem.product.price * quantity,
          };
        }
        return tempCartItem;
      });
      return updatedTempCartItems;
    });

    setCartState((prevTempCartState) => {
      const updatedCartItems = prevTempCartState.map((cartItem) => {
        if (cartItem.id === itemId) {
          return {
            ...cartItem,
            quantity: quantity,
            totalPrice: cartItem.product.price * quantity,
          };
        }
        return cartItem;
      });
      return updatedCartItems;
    });
  }

  const deleteCartItem = async (itemId: number) => {
    const { status } = await deleteCart(itemId);

    if (status === 200) {
      setCartState((oldCartItems) => {
        const updatedCartItems = oldCartItems.filter(
          (cartItem) => cartItem.id !== itemId
        );
        return updatedCartItems;
      });

      setTempCartState((prevTempCartState) => {
        const updatedTempCartItems = prevTempCartState.filter(
          (tempCartItem) => tempCartItem.id !== itemId
        );
        return updatedTempCartItems;
      });
    }
  };

  return {
    getCartItems,
    addCartItem,
    addShopingCart,
    updateCartQuantity,
    deleteCartItem
  };
}
