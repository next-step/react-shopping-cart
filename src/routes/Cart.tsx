import { useEffect, useState } from "react";
import LeftSection from "../components/cart/LeftSection";
import { Cart as CartType } from "../types/cart";
import { api } from "../utils/api";

function Cart() {
  const [carts, setCarts] = useState<CartType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // TODO: real api 로 수정
        const carts = await api.get<CartType[]>("/carts");
        setCarts(carts);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <LeftSection />;
}

export default Cart;
