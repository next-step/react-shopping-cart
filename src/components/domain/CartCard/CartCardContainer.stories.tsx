import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CartContextProvider } from '../Cart/CartContext';
import CartCardContainer from './CartCardContainer';

export default {
  title: 'Components/Cart/CartCardContainer',
  component: CartCardContainer,
} as ComponentMeta<typeof CartCardContainer>;

const Template: ComponentStory<typeof CartCardContainer> = (args) => (
  <CartContextProvider>
    <CartCardContainer {...args} />
  </CartContextProvider>
);

export const Default = Template.bind({});
Default.args = {
  cart: {
    id: faker.datatype.uuid(),
    checked: false,
    quantity: 1,
    product: {
      id: faker.datatype.uuid(),
      imageUrl: faker.image.food(300, 300, true),
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price(1000, 100000)),
    },
  },
};
