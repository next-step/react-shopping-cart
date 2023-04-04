import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductItem from 'components/domain/Product/Item';
export default {
  title: 'Domain/Product',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const mockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
};

const Template: ComponentStory<typeof ProductItem> = () => <ProductItem {...mockData} />;

export const Item = Template.bind({});
