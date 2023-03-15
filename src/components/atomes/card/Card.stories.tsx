import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardWrapper, ICard } from './index';

const defaultArgs = {
  title: '43,000원',
  description: 'PET보틀-정사각(420ml)',
  imageSrc: './assets/images/product.png',
  icon: './assets/svgs/cart.svg'
};

const NormalCard = (props: ICard) => {
  return (
    <CardWrapper
      {...props}
    >
      <CardWrapper.Image/>
      <CardWrapper.Info/>
    </CardWrapper>
  );
};

const FlexCard = (props: ICard) => {
  return (
    <CardWrapper
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CardWrapper.Image/>
        <CardWrapper.Info/>
      </div>
    </CardWrapper>
  );
};


export default {
  title: 'Common/Card',
  component: NormalCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof NormalCard> = (args) => <NormalCard {...args} />;
const Template2: ComponentStory<typeof NormalCard> = (args) => <FlexCard {...args} />;

export const Normal = Template.bind({});
Normal.args = defaultArgs;

export const Flex = Template2.bind({});
Flex.args = {
  ...defaultArgs,
  icon: ''
};
