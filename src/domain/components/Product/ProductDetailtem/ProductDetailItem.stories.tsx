import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductDetailItem from './ProductDetailItem';

export default {
  title: 'Domain/Product/DetailItem',
  component: ProductDetailItem,
} as ComponentMeta<typeof ProductDetailItem>;

const mockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
};

const Template: ComponentStory<typeof ProductDetailItem> = () => <ProductDetailItem {...mockData} />;

export const DetailItem = Template.bind({});
// DetailItem.parameters = {
//   reactRouter: {
//     routePath: '/product/:id',
//     routeParams: { id: 1 },
//   },
// };
