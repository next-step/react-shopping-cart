import { ProductList } from '../components';
import useProduct from '../hooks/useProduct';
import { ProductInfoType } from '../../../types';

const Home = () => {
  const {
    products,
    error,
    loading,
    navigateToDetailedPage,
    addCart,
    pageInfo,
  } = useProduct();

  if (loading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ProductList
        products={products as ProductInfoType[]}
        navigateToDetailedPage={navigateToDetailedPage}
        addCart={addCart}
        pageInfo={pageInfo}
      />
    </>
  );
};

export default Home;
