import { handleModal } from "common/modal";
import { printWon } from "common/util";
import { tempCartState } from "hooks/cart";
import { useRouter } from "hooks/useRouter";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ROUTE } from "router";

const RightSection = () => {
  const cart = useRecoilValue(tempCartState);

  const [totalPrice, setTotalPrice] = useState(0);
  const { go } = useRouter();

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

  const handleOrder = () => {
    if (!cart.length) {
      return alert("주문할 상품이 없습니다.");
    }

    return handleModal({
      title: `주문`,
      message: `${cart.length} 개의 상품을 주문하시겠습니까?`,
      onConfirm: () => go(ROUTE.ORDER_LIST),
    });
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
        <div className="flex-center mt-30 mx-10" onClick={() => handleOrder()}>
          <button className="primary-button flex-center">{orderText()}</button>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
