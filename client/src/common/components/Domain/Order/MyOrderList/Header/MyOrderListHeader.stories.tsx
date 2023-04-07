import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyOrderListHeader from './MyOrderListHeader.';
export default {
  title: 'Domain/OrderList/MyOrderListHeader',
  component: MyOrderListHeader,
} as ComponentMeta<typeof MyOrderListHeader>;

const Template: ComponentStory<typeof MyOrderListHeader> = () => <MyOrderListHeader id={1} />;

export const Default = Template.bind({});
