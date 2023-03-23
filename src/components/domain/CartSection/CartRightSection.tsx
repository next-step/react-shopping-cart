import { Button, Divider, Text } from '@/components/common';

const CartRightSection = () => {
  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <Text as="h3" className="cart-title">
          결제예상금액
        </Text>
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
  );
};

export default CartRightSection;
