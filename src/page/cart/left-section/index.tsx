import { CartItem } from "types/type";
import Item from "./item";
import { useRecoilValue } from "recoil";
import { cartState, useCart } from "hooks/cart";
import { useEffect, useState } from "react";

const LeftSection = () => {
  const carts = useRecoilValue(cartState);
  const [checked, setChecked] = useState(false);

  const { addTempCart, updateTempCartQuantity } = useCart();

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    carts.map((item: CartItem) => {
      addTempCart(checked, item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            onChange={() => setChecked(!checked)}
          />
          <label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </label>
        </div>
        <button className="delete-button">상품삭제</button>
      </div>
      <h3 className="cart-title">든든배송 상품(3개)</h3>
      <hr className="divide-line-gray mt-10" />
      {carts.map((item: CartItem) => (
        <Item
          item={item}
          key={item.id}
          addTempCart={addTempCart}
          updateTempCartQuantity={updateTempCartQuantity}
        />
      ))}
    </section>
  );
};

export default LeftSection;
