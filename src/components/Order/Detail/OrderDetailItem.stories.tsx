import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrderDetailItem from './OrderDetailItem';
import { OrderDetail } from '@/types/order';

const orderDetailItems: OrderDetail[] = [
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
];

const meta: Meta<typeof OrderDetailItem> = {
  title: 'Components/Order/OrderDetailItem',
  component: OrderDetailItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    orderList: orderDetailItems,
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <div style={{ width: '1080px' }}>
            <Story />
          </div>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof OrderDetailItem>;

export const Default: Story = {
  args: {
    orderList: orderDetailItems,
  },
};
