import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './index';

export default {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header/>;

export const Default = Template.bind({});
