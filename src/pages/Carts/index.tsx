import { CheckBox, Divider, Header, Text } from '@/components/common';
import Button from '@/components/common/Button';
import CartCard from '@/components/domain/CardCard';

const Carts = () => {
  return (
    <section className="cart-section">
      <Header title="장바구니" />

      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <CheckBox label="선택해제"></CheckBox>
            <Button type="outline">상품삭제</Button>
          </div>
          <h3 className="cart-title">든든배송 상품(3개)</h3>
          <Divider type="gray" />
          <CartCard />
          <Divider type="gray" />
          <CartCard />
          <Divider type="gray" />
          <CartCard />
          <Divider type="gray" />
        </section>
        <section className="cart-right-section">
          <div className="cart-right-section__top">
            <h3 className="cart-title">결제예상금액</h3>
          </div>
          <Divider type="thin" />
          <div className="cart-right-section__bottom">
            <div className="flex justify-between p-20 mt-20">
              <Text highlight>결제예상금액</Text>
              <Text highlight>21,800원</Text>
            </div>
            <div className="flex-center mt-30 mx-10">
              <Button>주문하기(3개)</Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Carts;
