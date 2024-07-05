import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrderList from './OrderList';
import { Order } from '@/types/order';

const meta: Meta<typeof OrderList> = {
  title: 'Components/Order/OrderList',
  component: OrderList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <div style={{ width: '1280px' }}>
            <Story />
          </div>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof OrderList>;

const emptyOrders: Order[] = [];
const orders: Order[] = [
  {
    id: 1,
    orderDetails: [
      {
        id: 1,
        name: '[그레인온] 골드카무트효소 30포',
        price: 35000,
        imageUrl:
          'https://product-image.kurly.com/product/image/be332720-3259-4fa3-9423-64a4d395df07.jpg',
        quantity: 2,
      },
      {
        id: 2,
        name: '[칸로] 캔디 5종 (택1)',
        price: 3960,
        imageUrl:
          'https://product-image.kurly.com/product/image/7aae11b3-348c-4935-bc2d-eab8b8f67d5f.jpg',
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    orderDetails: [
      {
        id: 3,
        name: '[오트사이드] 미니 귀리 우유 3종 (200mL X 6팩)',
        price: 7980,
        imageUrl:
          'https://product-image.kurly.com/product/image/733035e6-4952-494c-aeed-985b97a820a3.jpg',
        quantity: 3,
      },
    ],
  },
];

export const ExistingOrders: Story = {
  args: {
    orders,
  },
};

export const NoOrders: Story = {
  args: {
    orders: emptyOrders,
  },
};
