import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductItem } from 'components/Product/Item';
export default {
  title: '기본 아이템',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const mockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
};

const Template: ComponentStory<typeof ProductItem> = () => <ProductItem {...mockData} />;

export const DefaultPayment = Template.bind({});
