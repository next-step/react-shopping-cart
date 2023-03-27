import { SectionTitle, SectionCartList } from '../components';
import { Layout } from '../layout';
import useCart from '../hooks/useCart';
import { CartItemType } from '../types';

const Cart = () => {
  const { carts, error, loading } = useCart();

  if (loading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <SectionTitle text="장바구니" />
      <SectionCartList cartList={carts as CartItemType[]} />
    </Layout>
  );
};

export default Cart;
