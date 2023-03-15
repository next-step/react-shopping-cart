import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './index';

export default {
  title: 'Common/Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '43,000원',
  description: 'PET보틀-정사각(420ml)',
  imageSrc: './assets/images/product.png',
  icon: './assets/svgs/cart.svg'
};
