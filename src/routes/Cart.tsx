import { useEffect, useState } from "react";
import LeftSection from "../components/cart/LeftSection";
import { Cart as CartType } from "../types/cart";
import { mockApi } from "../utils/mockApi";

function Cart() {
  const [carts, setCarts] = useState<CartType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // TODO: real api 로 수정
        const carts = await mockApi.get<CartType[]>("/carts");
        setCarts(carts);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <LeftSection />;
}

export default Cart;
