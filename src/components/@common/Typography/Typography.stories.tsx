import type { ComponentStory, Story } from '@storybook/react';

import Typography from './Typography';
import { variants } from './Typography.types';

export default {
  title: 'Common/Typography',
  component: Typography,
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'radio', options: Object.keys(variants) },
    },
  },
};

export const Primary: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
    tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
    doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
    quidem quibusdam.
  </Typography>
);

Primary.args = {
  variant: 'body1',
  color: 'black',
};

export const Overview: Story<{}> = () => (
  <>
    <Typography variant="h1">h1. Heading</Typography>
    <Typography variant="h2">h2. Heading</Typography>
    <Typography variant="h3">h3. Heading</Typography>
    <Typography variant="h4">h4. Heading</Typography>
    <Typography variant="h5">h5. Heading</Typography>
    <Typography variant="body1" height="auto">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.{' '}
    </Typography>
    <Typography variant="body2" height="auto">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.{' '}
    </Typography>
    <Typography variant="subtitle1" height="auto">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.{' '}
    </Typography>
  </>
);
