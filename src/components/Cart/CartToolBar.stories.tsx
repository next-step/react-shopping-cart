import { Meta, StoryObj } from '@storybook/react';
import CartToolBar from './CartToolBar';

const meta: Meta<typeof CartToolBar> = {
  title: 'Components/Cart/CartToolBar',
  component: CartToolBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    hasProducts: {
      control: 'boolean',
    },
    isSelectedAll: {
      control: 'function',
    },
  },
  args: {
    hasProducts: true,
    isSelectedAll: () => false,
    onSelectAllChange: (event) => console.log('Select all changed', event),
    onRemoveSelectedProducts: () => console.log('Remove selected products'),
  },
};

export default meta;

type Story = StoryObj<typeof CartToolBar>;

export const Default: Story = {
  args: {
    hasProducts: true,
    isSelectedAll: () => false,
  },
};

export const AllSelected: Story = {
  args: {
    hasProducts: true,
    isSelectedAll: () => true,
  },
};
