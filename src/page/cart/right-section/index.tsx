import { handleModal } from "common/modal";
import { printWon } from "common/util";
import { cartsState, useCart } from "hooks/cart";
import { useOrder } from "hooks/order";
import { useRouter } from "hooks/useRouter";
import { useRecoilValue } from "recoil";
import { ROUTE } from "router";

const RightSection = () => {
  const carts = useRecoilValue(cartsState);

  const { go } = useRouter();

  const { deleteCartItems } = useCart();

  const { mutate } = useOrder();

  const orderText = () => {
    const orderCounter = carts.filter((v) => v.checked).length;
    return orderCounter ? `주문하기 (${orderCounter})` : "주문하기";
  };

  const handleOrder = () => {
    if (!carts.length) {
      return alert("주문할 상품이 없습니다.");
    }

    return handleModal({
      title: `주문`,
      message: `${carts.length} 개의 상품을 주문하시겠습니까?`,
      onConfirm: () => {
        order();
        go(ROUTE.ORDER_LIST);
      },
    });
  };

  const order = () => {
    orderItem();
    deleteCart();
  };

  const deleteCart = () => {
    deleteCartItems(carts);
  };

  const orderItem = () => {
    const orderItem = carts
      .filter((item) => item.checked)
      .map(({ product, quantity }) => {
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity,
        };
      }) as OrderDetail[];

    mutate(orderItem);
  };

  const totalPrice = carts
    .filter((v) => v.checked)
    .reduce((acc, cur) => {
      return acc + cur.product.price * cur.quantity;
    }, 0);

  const isOrder = carts.filter((v) => v.checked).length;

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
          <button
            onClick={handleOrder}
            className={
              isOrder
                ? "primary-button flex-center"
                : "default-button flex-center"
            }
          >
            {orderText()}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
