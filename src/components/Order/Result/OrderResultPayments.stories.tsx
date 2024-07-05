import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrderResultPayments from './OrderResultPayments';
import { orderResultPaymentsSection } from '@/pages/Order/OrderResultPage';

const meta: Meta<typeof OrderResultPayments> = {
  title: 'Components/Order/OrderResultPayments',
  component: OrderResultPayments,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <section className={orderResultPaymentsSection}>
            <Story />
          </section>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof OrderResultPayments>;

export const Default: Story = {
  args: {
    totalAmount: 58000,
    onPaymentButtonClick: () => console.log('Payment Button Clicked'),
  },
};
