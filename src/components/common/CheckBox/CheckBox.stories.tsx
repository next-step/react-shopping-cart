import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Primitives/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    colorScheme: {
      control: {
        type: 'select',
        options: ['blue', 'green'],
      },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    isChecked: false,
    children: 'CheckBox Label',
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    children: 'CheckBox',
    colorScheme: 'blue',
    isChecked: false,
  },
};
