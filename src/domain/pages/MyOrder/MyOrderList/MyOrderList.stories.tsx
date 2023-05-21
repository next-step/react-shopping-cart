import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyOrderListPage from './MyOrderListPage';
import { handlers } from '../mockserver';

export default {
  title: 'pages/MyOrderListPage',
  component: MyOrderListPage,
} as ComponentMeta<typeof MyOrderListPage>;

const Template: ComponentStory<typeof MyOrderListPage> = () => <MyOrderListPage />;
export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [handlers],
  },
};
