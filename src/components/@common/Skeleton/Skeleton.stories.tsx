import type { Meta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Typography } from '../Typography';

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

export const Variant: ComponentStory<typeof Skeleton> = (args) => (
  <Box display="flex" gap="10">
    <div>
      <Typography variant="body1" className="mb-5">
        circular
      </Typography>
      <Skeleton width={100} height={100} variant="circular" />
    </div>
    <div>
      <Typography variant="body1" className="mb-5">
        rectangular
      </Typography>
      <Skeleton width={100} height={100} variant="rectangular" />
    </div>
    <div>
      <Typography variant="body1" className="mb-5">
        rounded
      </Typography>
      <Skeleton width={100} height={100} variant="rounded" />
    </div>
  </Box>
);
