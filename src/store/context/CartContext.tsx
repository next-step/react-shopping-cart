import React, { createContext, useContext, useReducer, Dispatch, useEffect, useCallback } from "react";
import { CartItem } from "../type";
import { getCarts } from "api/cart";
import { cartsReducer, CartsActionType } from "store/reducers/cartReducer";

interface CartsContextType {
  carts: CartItem[];
  dispatch: Dispatch<CartsActionType>;
  fetchCarts: () => Promise<void>;
}

const CartContext = createContext<CartsContextType | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartsReducer, { carts: [] });

  const fetchCarts = useCallback(async () => {
    try {
      const data = await getCarts();
      dispatch({ type: "FETCH_CARTS", payload: data });
    } catch (error) {
      console.log(error)
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCarts();
  }, [fetchCarts]);

  return (
    <CartContext.Provider value={{ carts: state.carts, dispatch, fetchCarts }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = (): CartsContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartsContext must be used within a ProductsProvider");
  }

  return context;
};

export { CartProvider, useCartContext };