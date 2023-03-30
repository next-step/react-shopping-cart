import { PageTitle } from '../../../components';
import { CartLayout } from '../components';
import useCart from '../hooks/useCart';
import { useCartDispatch, useCartState } from '../../../context/CartContext';

const Cart = () => {
  const { cartData, error, loading } = useCart();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  if (loading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PageTitle text="장바구니" />
      <CartLayout cartState={cartState} cartDispatch={cartDispatch} />
    </>
  );
};

export default Cart;
