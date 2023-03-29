import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './OrderListHeader';
export default {
  title: 'Order',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const OrderListHeader = Template.bind({});
