import React from 'react';
import SectionProductList from '../components/home/SectionProductList';
import Layout from '../layout/Layout';
import useProduct from '../hooks/useProduct';
import { ProductType } from '../types';

const Home = () => {
  const { products, error, isLoading, navigateToDetailedPage } = useProduct();

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
      />
    </Layout>
  );
};

export default Home;
