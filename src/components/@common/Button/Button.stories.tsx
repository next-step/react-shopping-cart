import type { Meta, ComponentStory } from '@storybook/react';
import { Link } from 'react-router-dom';

import Button from './Button';
import { type ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
    },
    size: {
      control: { type: 'radio', options: Object.keys(ButtonSize) },
    },
    variant: {
      control: { type: 'radio', options: Object.keys(ButtonVariant) },
    },
  },
} as Meta;

export const Primary: ComponentStory<typeof Button> = ({
  children,
  ...attributes
}: ButtonProps) => <Button {...attributes}>{children}</Button>;

Primary.args = {
  fullWidth: false,
  size: 'xs',
  variant: 'solid',
  color: 'gray07',
  children: '카드 생성 완료하기',
};

export const LinkButton: ComponentStory<typeof Button> = ({
  ...attributes
}) => (
  <Button {...attributes} href="https://github.com/areumsheep">
    https://github.com/areumsheep
  </Button>
);
LinkButton.args = {
  fullWidth: false,
  size: 'md',
  variant: 'solid',
  color: 'gray07',
};
