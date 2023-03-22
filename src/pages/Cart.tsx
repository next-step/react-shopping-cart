import SectionTitle from '../components/common/SectionTitle';
import SectionCartList from '../components/cart/SectionCartList';
import Layout from '../layout/Layout';
import useCart from '../hooks/useCart';

const Cart = () => {
  const { carts } = useCart();

  return (
    <Layout>
      <SectionTitle text="장바구니" />
      <SectionCartList carts={carts} />
    </Layout>
  );
};

export default Cart;
