import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderPage from './OrderPage';
import { rest } from 'msw';
export default {
  title: 'pages/OrderPage',
  component: OrderPage,
} as ComponentMeta<typeof OrderPage>;

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

const Template: ComponentStory<typeof OrderPage> = () => <OrderPage />;
Template.parameters = {
  msw: {
    handlers: [
      rest.get('/carts', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockCartData));
      }),
    ],
  },
};

export const Default = Template.bind({});

Default.args = {};
