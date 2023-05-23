import { ComponentStory, ComponentMeta } from '@storybook/react';
import { handlers } from './mockserver';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MyOrderListPage from './MyOrderList/MyOrderListPage';
import MyOrderListDetailPage from './MyOrderListDetail/MyOrderListDetailPage';
import { ROUTE_URL } from 'common/routes';

const MyOrderPage = () => {
  const naivgate = useNavigate();
  return (
    <div>
      <button onClick={() => naivgate('/')}>주문목록 페이지로 이동</button>
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
  title: 'pages/MyOrder/MyOrderPage',
  component: MyOrderPage,
} as ComponentMeta<typeof MyOrderPage>;

const Template: ComponentStory<typeof MyOrderPage> = () => <MyOrderPage />;
export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [handlers],
  },
};
