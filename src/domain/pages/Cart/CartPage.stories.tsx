import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartPage from './CartPage';
import { handlers } from './mockserver';

export default {
  title: 'pages/Cart/CartPage',
  component: CartPage,
} as ComponentMeta<typeof CartPage>;

const Template: ComponentStory<typeof CartPage> = () => <CartPage />;

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [handlers],
  },
};
