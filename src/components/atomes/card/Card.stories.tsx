import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardWrapper } from './index';
import { Flex } from '../index';

const defaultArgs = {
  title: '43,000원',
  description: 'PET보틀-정사각(420ml)',
  imageSrc: './assets/images/product.png',
  icon: './assets/svgs/cart.svg'
};

export default {
  title: 'Common/Card',
  component: CardWrapper,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper
    {...args}
  >
    <CardWrapper.Image/>
    <CardWrapper.Info/>
  </CardWrapper>
);
const Template2: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper
    {...args}
  >
    <Flex className="items-center">
      <CardWrapper.Image/>
      <CardWrapper.Info/>
    </Flex>
  </CardWrapper>
);

export const NormalCard = Template.bind({});
NormalCard.args = defaultArgs;

export const FlexCard = Template2.bind({});
FlexCard.args = {
  ...defaultArgs,
  icon: ''
};
