import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyOrderListHeader from './Header/MyOrderListHeader';
import MyOrderListItem from './Item/MyOrderListItem';

export default {
  title: 'Domain/Order/MyOrderList',
  component: MyOrderListHeader,
} as ComponentMeta<typeof MyOrderListHeader>;

const OrderMockData = {
  id: 1,
  name: '냉면용기(대)',
  price: 83700,
  image: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  amount: 1,
};
const Template: ComponentStory<typeof MyOrderList> = () => <MyOrderList />;

const MyOrderList = () => {
  return (
    <div>
      <MyOrderListHeader id={1} />
      <MyOrderListItem {...OrderMockData} />
    </div>
  );
};

export const Default = Template.bind({});
