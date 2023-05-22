import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductListPage from './ProductList';
import ProductDetailPage from './ProductDetail';
import { handlers } from './mockserver';
import { ROUTE_URL } from 'common/routes';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from 'common/components';

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={ROUTE_URL.PRODUCT_LIST} element={<ProductListPage />}></Route>
        <Route path={ROUTE_URL.PRODUCT_DETAIL} element={<ProductDetailPage />}></Route>
        <Route path="/" element={<ProductListPage />}></Route>
        <Route path="/:id" element={<ProductDetailPage />}></Route>
      </Routes>
    </div>
  );
};
export default {
  title: 'pages/ProductPage',
  component: ProductPage,
} as ComponentMeta<typeof ProductPage>;

const Template: ComponentStory<typeof ProductPage> = () => <ProductPage />;

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  msw: {
    handlers: [handlers],
  },
};
