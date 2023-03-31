import { Header } from '@/components/common';
import { CartListSection, CartOrderDisplaySection } from '@/components/domain';

const Cart = () => {
  return (
    <section className="cart-section">
      <Header title="장바구니" />
      <div className="flex">
        <CartListSection />
        <CartOrderDisplaySection />
      </div>
    </section>
  );
};

export default Cart;
