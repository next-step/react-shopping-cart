import { Header } from '@/components/common';
import useHttp from '@/hooks/useHttp';
import useOnMounted from '@/hooks/useOnMounted';
import * as cartApi from '@/api/cart';
import { useCartContext } from './CartContext';
import { useEffect } from 'react';
import { CartLeftSection, CartRightSection } from '@/components/domain';

const Cart = () => {
  const { sendRequest, data: cartData = [] } = useHttp(cartApi.getAllCarts);

  const { setCarts } = useCartContext();

  useEffect(() => {
    if (cartData.length > 0) {
      setCarts(cartData.map((cart) => ({ ...cart, checked: false })));
    }
  }, [cartData]);

  useOnMounted(() => {
    sendRequest();
  });

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
