import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartItem from './CartItem';

export default {
  title: 'Domain/Cart/CartItem',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const DefaultMockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  amount: 1,
};

const Template: ComponentStory<typeof CartItem> = () => <CartItem {...DefaultMockData} />;

export const DefaultItem = Template.bind({});
