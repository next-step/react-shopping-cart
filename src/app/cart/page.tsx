import { useAtomValue } from "jotai";
import { cartAtom } from "@/atoms";
import { mergeByProductId } from "@/utils/cart";

const Cart = () => {
  const cart = useAtomValue(cartAtom);
  return (
    <div>
      {mergeByProductId(cart).map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <div>{item.price}</div>
            <div>{item.quantity}</div>개
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
