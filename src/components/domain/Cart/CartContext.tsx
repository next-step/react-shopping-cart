import { createContext, PropsWithChildren, useContext, useState } from 'react';

type CartState = {
  carts: UserCart[];
  selectedItems: UserCart[];
};
type CartAction = {
  increaseCartItemQty: (selectedCart: UserCart) => void;
  decreaseCartItemQty: (selectedCart: UserCart) => void;
  setAllChecked: () => void;
  setAllUnChecked: () => void;
  setCarts: (selectedCarts: UserCart[]) => void;
  selectCart: (selectedCart: UserCart) => void;
  removeItem: (selectedCart: UserCart) => void;
  removeSelectedItems: () => void;
};
type CartContext = CartState & CartAction;

const CartContext = createContext<CartContext | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, setCartState] = useState<UserCart[]>([]);
  const selectedItems = cartState.filter(({ checked }) => checked);

  const selectCart = (selectedCart: UserCart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? { ...cart, checked: !cart.checked }
          : cart;
      })
    );
  };

  const increaseCartItemQty = (selectedCart: UserCart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? {
              ...cart,
              quantity:
                cart.quantity == CART_MAX_QUANTITY
                  ? CART_MAX_QUANTITY
                  : cart.quantity + 1,
              checked: true,
            }
          : cart;
      })
    );
  };
  const decreaseCartItemQty = (selectedCart: UserCart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? {
              ...cart,
              quantity:
                cart.quantity == CART_MIN_QUANTITY
                  ? CART_MIN_QUANTITY
                  : cart.quantity - 1,
              checked: true,
            }
          : cart;
      })
    );
  };

  const removeItem = (selectedCart: UserCart) => {
    setCartState((prev) => prev.filter((cart) => selectedCart.id !== cart.id));
  };

  const removeSelectedItems = () => {
    const selectedIds = selectedItems.map((cart) => cart.id);
    setCartState((prev) =>
      prev.filter((cart) => !selectedIds.includes(cart.id))
    );
  };

  const setAllChecked = () =>
    setCartState((prev) => prev.map((cart) => ({ ...cart, checked: true })));
  const setAllUnChecked = () =>
    setCartState((prev) => prev.map((cart) => ({ ...cart, checked: false })));

  const value = {
    carts: cartState,
    setCarts: (carts: UserCart[]) => setCartState(carts),
    selectedItems,
    selectCart,
    setAllChecked,
    setAllUnChecked,
    increaseCartItemQty,
    decreaseCartItemQty,
    removeItem,
    removeSelectedItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

const CART_MAX_QUANTITY = 20;
const CART_MIN_QUANTITY = 1;
