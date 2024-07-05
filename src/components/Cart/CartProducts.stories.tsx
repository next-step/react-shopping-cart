import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartProducts from './CartProducts';
import { CartProduct } from '@/types/cart';

const meta: Meta<typeof CartProducts> = {
  title: 'Components/Cart/CartProducts',
  component: CartProducts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CartProducts>;

const emptyCartProducts: CartProduct[] = [];
const cartProducts: CartProduct[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: '[그레인온] 골드카무트효소 30포',
      price: 35000,
      imageUrl:
        'https://product-image.kurly.com/product/image/be332720-3259-4fa3-9423-64a4d395df07.jpg',
    },
    quantity: 2,
  },
  {
    id: 2,
    product: {
      id: 2,
      name: '[칸로] 캔디 5종 (택1)',
      price: 3960,
      imageUrl:
        'https://product-image.kurly.com/product/image/7aae11b3-348c-4935-bc2d-eab8b8f67d5f.jpg',
    },
    quantity: 1,
  },
];

export const Default: Story = {
  args: {
    hasProducts: true,
    cartProducts,
    selectionProducts: new Set<number>(),
    onToggleSelection: (productId) =>
      console.log('Toggled selection:', productId),
    onIncreaseQuantity: (productId) =>
      console.log('Increased quantity:', productId),
    onDecreaseQuantity: (productId) =>
      console.log('Decreased quantity:', productId),
    onRemoveProduct: (productId) => console.log('Removed product:', productId),
  },
};

export const EmptyCart: Story = {
  args: {
    hasProducts: false,
    cartProducts: emptyCartProducts,
    selectionProducts: new Set<number>(),
    onToggleSelection: (productId) =>
      console.log('Toggled selection:', productId),
    onIncreaseQuantity: (productId) =>
      console.log('Increased quantity:', productId),
    onDecreaseQuantity: (productId) =>
      console.log('Decreased quantity:', productId),
    onRemoveProduct: (productId) => console.log('Removed product:', productId),
  },
};
