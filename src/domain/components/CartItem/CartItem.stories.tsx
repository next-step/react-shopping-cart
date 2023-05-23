import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartItem from './CartItem';

export default {
  title: 'Domain/Cart/CartItem',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const mock = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  amount: 1,
  isOrder: false,
};
const mock2 = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  amount: 1,
  isOrder: true,
};

const Template: ComponentStory<typeof CartItem> = () => <CartItem {...mock} />;
const Template2: ComponentStory<typeof CartItem> = () => <CartItem {...mock2} />;

export const UnCheckedItem = Template.bind({});
export const CheckedItem = Template2.bind({});
