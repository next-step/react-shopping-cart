import { printWon } from "common/util";
import { tempCartState } from "hooks/cart";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const RightSection = () => {
  const cart = useRecoilValue(tempCartState);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length) {
      return setTotalPrice(
        cart
          .map((v) => (v.totalPrice ? v.totalPrice : 0))
          .reduce((a: number, b: number) => a + b)
      );
    }
    return setTotalPrice(0);
  }, [cart]);

  const orderText = () => {
    return cart.length ? `주문하기 (${cart.length})` : "주문하기";
  };

  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <h3 className="cart-title">결제예상금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">결제예상금액</span>
          <span className="highlight-text">{printWon(totalPrice)}</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center">{orderText()}</button>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
