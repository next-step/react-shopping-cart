import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const defaultArgs = {
  text: 'Hello World!',
  color: 'gray'
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  small: true
};
