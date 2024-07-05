import { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['gray', 'lightGray'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Gray: Story = {
  render: () => (
    <div style={{ width: '300px', height: '300px' }}>
      <Divider color='gray' />
    </div>
  ),
};

export const LightGray: Story = {
  render: () => (
    <div style={{ width: '300px', height: '300px' }}>
      <Divider color='lightGray' />
    </div>
  ),
};
