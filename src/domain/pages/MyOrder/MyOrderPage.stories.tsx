import { ComponentStory, ComponentMeta } from '@storybook/react';
import { handlers } from './mockserver';
import { Route, Routes } from 'react-router-dom';

import MyOrderListPage from './MyOrderList/MyOrderListPage';
import MyOrderListDetailPage from './MyOrderListDetail/MyOrderListDetailPage';
import { NavBar } from 'common/components';
import { ROUTE_URL } from 'common/routes';

const MyOrderPage = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={ROUTE_URL.MY_ORDER_LIST_DETAIL} element={<MyOrderListDetailPage />}></Route>
        <Route path={ROUTE_URL.MY_ORDER_LIST} element={<MyOrderListPage />}></Route>
        <Route path="/" element={<MyOrderListPage />}></Route>
        <Route path="/:id" element={<MyOrderListDetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default {
  title: 'pages/MyOrderPage',
  component: MyOrderPage,
} as ComponentMeta<typeof MyOrderPage>;

const Template: ComponentStory<typeof MyOrderPage> = () => <MyOrderPage />;
export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [handlers],
  },
};
