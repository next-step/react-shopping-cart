import { createContext, PropsWithChildren, useContext, useState } from 'react';

type CartContext = {
  carts: UserCart[];
  setCarts: (carts: UserCart[]) => void;
  selectCart: (cart: Cart) => void;
  setAllChecked: () => void;
  setAllUnChecked: () => void;
};

const CartContext = createContext<CartContext | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, setCartState] = useState<UserCart[]>([]);

  const selectCart = (selectedCart: Cart) => {
    setCartState((prev) =>
      prev.map((cart) => {
        return cart.id === selectedCart.id
          ? { ...cart, checked: !cart.checked }
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
    setCarts: (carts: Cart[]) => setCartState(carts),
    selectCart,
    setAllChecked,
    setAllUnChecked,
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
