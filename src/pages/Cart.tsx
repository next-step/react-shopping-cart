import SectionTitle from '../components/common/SectionTitle';
import SectionCartList from '../components/cart/SectionCartList';
import Layout from '../layout/Layout';

const Cart = () => {
  return (
    <Layout>
      <SectionTitle text="장바구니" />
      <SectionCartList />
    </Layout>
  );
};

export default Cart;
