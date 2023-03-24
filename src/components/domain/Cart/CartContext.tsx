import { createContext, PropsWithChildren, useContext, useState } from 'react';

type CartContext = {
  carts: UserCart[];
  selectedItems: UserCart[];
  setCarts: (carts: UserCart[]) => void;
  selectCart: (cart: Cart) => void;
  increaseCartItemQty: (cart: Cart) => void;
  decreaseCartItemQty: (cart: Cart) => void;
  setAllChecked: () => void;
  setAllUnChecked: () => void;
};

const CartContext = createContext<CartContext | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, setCartState] = useState<UserCart[]>([]);
  const selectedItems = cartState.filter(({ checked }) => checked);

  const selectCart = (selectedCart: Cart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? { ...cart, checked: !cart.checked }
          : cart;
      })
    );
  };

  const increaseCartItemQty = (selectedCart: Cart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart;
      })
    );
  };
  const decreaseCartItemQty = (selectedCart: Cart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? { ...cart, quantity: cart.quantity === 1 ? 1 : cart.quantity - 1 }
          : cart;
      })
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
