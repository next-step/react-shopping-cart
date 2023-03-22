import React from 'react';
import SectionProductList from '../components/home/SectionProductList';
import Layout from '../layout/Layout';
import useProduct from '../hooks/useProduct';

const Home = () => {
  const { products, onClickProductItem } = useProduct();

  return (
    <Layout>
      <SectionProductList
        products={products}
        onClickProductItem={onClickProductItem}
      />
    </Layout>
  );
};

export default Home;
