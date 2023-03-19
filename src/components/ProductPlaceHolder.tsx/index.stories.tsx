import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductCardPlaceHolder from '.';

export default {
  title: 'Components/Common/ProductCardPlaceHolder',
  component: ProductCardPlaceHolder,
} as ComponentMeta<typeof ProductCardPlaceHolder>;

const Template: ComponentStory<typeof ProductCardPlaceHolder> = () => (
  <ProductCardPlaceHolder />
);

export const Default = Template.bind({});
Default.args = {};
