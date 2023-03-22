import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartCard from '.';

export default {
  title: 'Components/Cart/CartCard',
  component: CartCard,
} as ComponentMeta<typeof CartCard>;

const Template: ComponentStory<typeof CartCard> = (args) => (
  <CartCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
