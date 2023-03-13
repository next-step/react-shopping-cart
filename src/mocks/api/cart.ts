// import { CartItem } from "store/type";

export const getCarts = async () => {
  const response = await fetch("/api/carts");
  const data = await response.json();
  return data;
};
