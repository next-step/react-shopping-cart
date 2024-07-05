import { Meta, StoryObj } from '@storybook/react';
import Button, { button } from './Button';
// import { Button, buttonRecipe } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: button.variantMap.variant,
      control: { type: 'radio' },
    },
    colorScheme: {
      options: button.variantMap.colorScheme,
      control: { type: 'radio' },
    },
  },
  args: {
    type: 'button',
    variant: 'solid',
    colorScheme: 'blue',
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'solid',
    colorScheme: 'blue',
  },
};

export const WithDisabled: Story = {
  args: {
    disabled: true,
  },
};
