import Layout from '../layout/Layout';
import SectionProductList from '../components/home/SectionProductList';
import { useRouter, useProduct, useCustomMutation } from '../hooks';
import { CartItemType, ProductType } from '../types';
import { CONFIRM } from '../constant/message';
import { ROUTE } from '../router';
import { updateCartList } from '../api/request';

const Home = () => {
  const { confirmAndRoute } = useRouter();
  const { products, error, isLoading, navigateToDetailedPage } = useProduct();
  const { mutate } = useCustomMutation<unknown, CartItemType>((payload) =>
    updateCartList(payload)
  );
  const addCart = async (item: ProductType) => {
    await mutate({ id: Number(item.id), product: item });
    confirmAndRoute(CONFIRM.CART_AND_ROUTE, ROUTE.CART);
  };

  if (isLoading) {
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
