import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { CartItem } from '.';

export default {
  title: 'Cart',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const DefaultMockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  isOrder: false,
  amount: 1,
};
const OrderMockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  isOrder: true,
  amount: 1,
};

const Template: ComponentStory<typeof CartItem> = () => <CartItem {...DefaultMockData} />;
const Template2: ComponentStory<typeof CartItem> = () => <CartItem {...OrderMockData} />;

export const DefaultItem = Template.bind({});

export const OrderItem = Template2.bind({});
