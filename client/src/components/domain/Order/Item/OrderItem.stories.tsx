import { ComponentStory, ComponentMeta } from '@storybook/react';
import Item from './OrderItem';

export default {
  title: 'Domain/Order',
  component: Item,
} as ComponentMeta<typeof Item>;

const OrderMockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  amount: 1,
};
const Template: ComponentStory<typeof Item> = () => <Item {...OrderMockData} />;

export const Default = Template.bind({});
