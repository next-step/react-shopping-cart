import { useQuery } from "react-query";
import { getCarts } from "services/cart";

const CART = 'cart'

export function useCartList() {
  return useQuery(CART, getCarts);
}