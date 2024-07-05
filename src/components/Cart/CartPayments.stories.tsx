import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartPayments from './CartPayments';
import { cartPaymentsSection } from '@/pages/Cart/CartPage';
import { CartProduct } from '@/types/cart';

const meta: Meta<typeof CartPayments> = {
  title: 'Components/Cart/CartPayments',
  component: CartPayments,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <section className={cartPaymentsSection}>
            <Story />
          </section>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CartPayments>;

const emptySelectedProducts: CartProduct[] = [];
const selectedProducts: CartProduct[] = [
  {
    id: 123,
    product: {
      id: 1,
      name: '[그레인온] 골드카무트효소 30포',
      price: 35000,
      imageUrl:
        'https://product-image.kurly.com/product/image/be332720-3259-4fa3-9423-64a4d395df07.jpg',
    },
    quantity: 2,
  },
];

export const Default: Story = {
  args: {
    selectedProducts,
  },
};

export const NoSelectedProducts: Story = {
  args: {
    selectedProducts: emptySelectedProducts,
  },
};
