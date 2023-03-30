import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './OrderListHeader';
export default {
  title: 'Domain/OrderList/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
