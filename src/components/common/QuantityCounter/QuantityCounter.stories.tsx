import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import QuantityCounter from './QuantityCounter';

const meta: Meta<typeof QuantityCounter> = {
  title: 'Primitives/QuantityCounter',
  component: QuantityCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    quantity: { control: 'number' },
    onIncrement: { action: 'incremented' },
    onDecrement: { action: 'decremented' },
  },
};

export default meta;

type Story = StoryObj<typeof QuantityCounter>;

export const Primary: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(args.quantity);

    const handleIncrement = () => {
      setQuantity((prev) => Math.min((prev ?? 0) + 1, args.max ?? 99));
      args.onIncrement();
    };

    const handleDecrement = () => {
      setQuantity((prev) => Math.max((prev ?? 0) - 1, args.min ?? 1));
      args.onDecrement();
    };

    return (
      <QuantityCounter
        min={1}
        max={20}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    );
  },
  args: {
    min: 1,
    max: 20,
    quantity: 5,
  },
};
