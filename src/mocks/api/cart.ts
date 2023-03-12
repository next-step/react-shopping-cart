// import { CartItem } from "store/type";

export const getCarts = async () => {
  const response = await fetch("/api/carts");
  const products = await response.json();
  return products;
};
