import { Header } from '@/components/common';
import { CartLeftSection, CartRightSection } from '@/components/domain';

const Cart = () => {
  return (
    <section className="cart-section">
      <Header title="장바구니" />
      <div className="flex">
        <CartLeftSection />
        <CartRightSection />
      </div>
    </section>
  );
};

export default Cart;
