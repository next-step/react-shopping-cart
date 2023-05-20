import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductDetailPage from './ProductDetailPage';
import { handlers } from './mockserver';

export default {
  title: 'pages/ProductDetailPage',
  component: ProductDetailPage,
} as ComponentMeta<typeof ProductDetailPage>;

const Template: ComponentStory<typeof ProductDetailPage> = () => <ProductDetailPage />;

export const Default = Template.bind({});

Default.args = {
  id: 1,
};

Default.parameters = {
  msw: {
    handlers: [handlers],
  },
  reactRouter: {
    routePath: '/product/:id',
    routeParams: { id: 1 },
  },
};
