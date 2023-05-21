import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderPage from './OrderPage';
import { rest } from 'msw';
const mockCartData = [
  {
    id: 1,
    name: '냉면용기(대)',
    price: 83700,
    image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
    isOrder: true,
    amount: 1,
  },
];
export default {
  title: 'pages/OrderPage',
  component: OrderPage,
} as ComponentMeta<typeof OrderPage>;

// 다른곳에서 모킹하는서버를 가져옴 .. 신기하네?
const Template: ComponentStory<typeof OrderPage> = () => <OrderPage />;
export const Default = Template.bind({});
