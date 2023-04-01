import type { Meta, ComponentStory } from '@storybook/react';

import Skeleton from './Skeleton';
import { SkeletonVariant } from './Skeleton.types';

export default {
  title: 'Common/Skeleton',
  component: Skeleton,
  argTypes: {
    height: { control: { type: 'number', min: 3 } },
    variant: {
      control: { type: 'radio', options: Object.keys(SkeletonVariant) },
    },
  },
} as Meta;

export const Primary: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

Primary.args = {
  width: 100,
  height: 100,
  animation: 'pulse',
  variant: 'rounded',
};
