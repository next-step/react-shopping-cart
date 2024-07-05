// Title.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Title, { TitleProps } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Primitives/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['title', 'subtitle'],
      },
    },
    as: {
      control: {
        type: 'select',
        options: ['h2', 'h3'],
      },
    },
    css: {
      control: 'object',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const TitleVariant: Story = {
  render: (args: TitleProps) => (
    <Title {...args} variant='title'>
      {args.children || '제목 제목'}
    </Title>
  ),
};

export const SubtitleVariant: Story = {
  render: (args: TitleProps) => (
    <Title {...args} variant='subtitle'>
      {args.children || '부제목 부제목'}
    </Title>
  ),
};
