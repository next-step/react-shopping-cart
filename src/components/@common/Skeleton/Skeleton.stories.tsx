import type { Meta, ComponentStory } from '@storybook/react';
import { Box, Typography } from 'components/@common';

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

export const Variant: ComponentStory<typeof Skeleton> = () => (
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

export const Animation: ComponentStory<typeof Skeleton> = () => (
  <Box display="flex" gap="10">
    <div>
      <Typography variant="body1" className="mb-5">
        false
      </Typography>
      <Skeleton width={200} height={100} variant="rounded" />
    </div>
    <div>
      <Typography variant="body1" className="mb-5">
        pulse
      </Typography>
      <Skeleton width={200} height={100} variant="rounded" animation="pulse" />
    </div>
    <div>
      <Typography variant="body1" className="mb-5">
        wave
      </Typography>
      <Skeleton width={200} height={100} variant="rounded" animation="wave" />
    </div>
  </Box>
);
