import { PageTitle } from '../../../components';
import { CartLayout } from '../components';
import useCart from '../hooks/useCart';
import { useCartState } from '../../../context/CartContext';

const Cart = () => {
  const { error, loading, cartDispatchFunction } = useCart();
  const cartState = useCartState();

  if (loading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PageTitle text="장바구니" />
      <CartLayout cartState={cartState} cartDispatch={cartDispatchFunction} />
    </>
  );
};

export default Cart;
