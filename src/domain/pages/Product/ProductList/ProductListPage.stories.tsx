import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductListPage from './ProductListPage';
import { handlers } from '../mockserver';

export default {
  title: 'pages/Product/ProductListPage',
  component: ProductListPage,
} as ComponentMeta<typeof ProductListPage>;

const Template: ComponentStory<typeof ProductListPage> = () => <ProductListPage />;

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  msw: {
    handlers: [handlers],
  },
};
