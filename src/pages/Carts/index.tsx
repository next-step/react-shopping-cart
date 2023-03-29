import Cart from '@/components/domain/Cart';
import { CartContextProvider } from '@/components/domain/Cart/CartContext';

const Carts = () => {
  return (
    <CartContextProvider>
      <Cart />
    </CartContextProvider>
  );
};

export default Carts;
