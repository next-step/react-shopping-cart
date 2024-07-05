import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductItem from './ProductItem';
import { MOCK_PRODUCTS_DATA } from '../../mocks/data/products';

const productList = MOCK_PRODUCTS_DATA;

const meta: Meta<typeof ProductItem> = {
  title: 'Components/Product/ProductItem',
  component: ProductItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    ...productList[0],
  },
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

type Story = StoryObj<typeof ProductItem>;

export const Default: Story = {
  args: {
    ...productList[0],
  },
};
