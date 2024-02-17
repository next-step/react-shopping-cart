import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderPage from './OrderPage';
import { handlers } from './mockserver';
export default {
  title: 'pages/Order/OrderPage',
  component: OrderPage,
} as ComponentMeta<typeof OrderPage>;

const Template: ComponentStory<typeof OrderPage> = () => <OrderPage />;

export const Default = Template.bind({});

Default.story = {
  parameters: {
    msw: {
      handlers: [handlers],
    },
  },
};
