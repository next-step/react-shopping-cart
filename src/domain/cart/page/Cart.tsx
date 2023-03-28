import { PageTitle } from '../../../components';
import { CartLayout } from '../components';
import useCart from '../hooks/useCart';
import { CartInfoType } from '../../../types';

const Cart = () => {
  const { cartData, error, loading } = useCart();

  if (loading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PageTitle text="장바구니" />
      <CartLayout cartList={cartData as CartInfoType[]} />
    </>
  );
};

export default Cart;
