import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartCardSkeleton from './CartCardSkeleton';

export default {
  title: 'Components/Cart/CartCardSkeleton',
  component: CartCardSkeleton,
} as ComponentMeta<typeof CartCardSkeleton>;

const Template: ComponentStory<typeof CartCardSkeleton> = (args) => (
  <CartCardSkeleton />
);

export const Default = Template.bind({});
Default.args = {};
