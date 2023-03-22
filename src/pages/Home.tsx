import React from 'react';
import SectionProductList from '../components/home/SectionProductList';
import Layout from '../layout/Layout';
import useProduct from '../hooks/useProduct';
import { CartItemType, ProductType } from '../types';
import useRouter from '../hooks/useRouter';
import useCustomMutation from '../hooks/useCustomMutation';
import axiosRequest from '../api/axios';
import { CONFIRM } from '../constant/message';
import { ROUTE } from '../router';

const Home = () => {
  const { confirmAndRoute } = useRouter();
  const { products, error, isLoading, navigateToDetailedPage } = useProduct();
  const { mutate } = useCustomMutation<unknown, CartItemType>((payload) =>
    axiosRequest({
      url: `${process.env.REACT_APP_API_PATH}/carts`,
      method: 'POST',
      data: payload,
    })
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
