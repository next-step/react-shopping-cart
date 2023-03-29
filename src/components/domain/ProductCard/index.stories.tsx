import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductCard from '.';

export default {
  title: 'Components/Product/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
