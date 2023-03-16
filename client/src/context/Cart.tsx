import { createContext, useState } from 'react';
import { CartListType, ProductType } from 'types';

type CartContextType = {
  cartList: CartListType;
  addItem: (product: ProductType) => void;
};

export const CartContext = createContext<CartContextType>({
  cartList: [],
  addItem: function (product: ProductType) {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartList, setCartList] = useState<CartListType>([]);

  const addItem = (product: ProductType) => {
    setCartList((prevCartList) => [...prevCartList, product]);
  };
  const context = {
    cartList,
    addItem,
  };

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
