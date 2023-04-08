import { PageTitleLayout } from '@/components';
import { CartTable } from './components/CartTable';
import CartAside from './components/CartAside';
import { CartContextProvider } from './context/CartContext';

function CartPage() {
  return (
    <CartContextProvider>
      <PageTitleLayout title="장바구니">
        <div className="relative flex gap-10">
          <div className="flex-[6]">
            <CartTable />
          </div>
          <div className="flex-[4]">
            <CartAside />
          </div>
        </div>
      </PageTitleLayout>
    </CartContextProvider>
  );
}

export default CartPage;
