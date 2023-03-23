import Cart from '@/components/domain/Cart';
import { CartContextProvider } from '@/components/domain/CartSection/CartContext';

const Carts = () => {
  return (
    <CartContextProvider>
      <Cart />
    </CartContextProvider>
  );
};

export default Carts;
