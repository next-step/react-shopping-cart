import { Title } from '../../../components';
import { CartLayout } from '../components';
import { Layout } from '../../../layout';
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
    <Layout>
      <Title text="장바구니" />
      <CartLayout cartList={cartData as CartInfoType[]} />
    </Layout>
  );
};

export default Cart;
