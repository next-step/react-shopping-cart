import { handleModal } from "common/modal";
import { printWon } from "common/util";
import { useDeleteCart } from "hooks/cart";
import { tempOrderState, useAddOrder } from "hooks/order";
import { useRouter } from "hooks/useRouter";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ROUTE } from "router";

const RightSection = () => {
  const order = useRecoilValue(tempOrderState);

  const [totalPrice, setTotalPrice] = useState(0);
  const { go } = useRouter();

  const { deleteCartItem } = useDeleteCart();
  const { mutate } = useAddOrder();

  useEffect(() => {
    if (order.length) {
      return setTotalPrice(
        order
          .map((v) => (v.price * v.quantity))
          .reduce((a: number, b: number) => a + b)
      );
    }
    return setTotalPrice(0);
  }, [order]);

  const orderText = () => {
    return order.length ? `주문하기 (${order.length})` : "주문하기";
  };

  const handleOrder = () => {
    if (!order.length) {
      return alert("주문할 상품이 없습니다.");
    }

    return handleModal({
      title: `주문`,
      message: `${order.length} 개의 상품을 주문하시겠습니까?`,
      onConfirm: () => {
        deleteCartAndOrderItem();
        go(ROUTE.ORDER_LIST);
      },
    });
  };

  const deleteCartAndOrderItem = () => {
    // TODO : 주문하기 버튼 클릭시 장바구니에서 삭제 refactor
    mutate(order);
    // eslint-disable-next-line array-callback-return
    return order.map((item) => {
      deleteCartItem(item.id);
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
          <button className={order.length ? 'primary-button flex-center' : 'default-button flex-center'}>{orderText()}</button>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
