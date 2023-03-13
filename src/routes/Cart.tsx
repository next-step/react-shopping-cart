import { useEffect, useState } from "react";
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

  return <div>Cart</div>;
}

export default Cart;
