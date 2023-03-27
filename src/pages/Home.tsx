import { Layout } from '../layout';
import { SectionProductList } from '../components';
import { useProduct } from '../hooks';
import { ProductType } from '../types';

const Home = () => {
  const { products, error, loading, navigateToDetailedPage, addCart } =
    useProduct();

  if (loading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <SectionProductList
        products={products as ProductType[]}
        navigateToDetailedPage={navigateToDetailedPage}
        addCart={addCart}
      />
    </Layout>
  );
};

export default Home;
