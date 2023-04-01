import FlexContainer from 'components/FlexContainer';
import Loading from 'components/Loading';
import PageContainer from 'components/PageContainer';
import { ORDERS } from 'constants/orders';
import useAxios from 'hooks/useAxios';
import PageTitle from 'pages/shopping/components/PageTitle';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CartItem } from 'types/cart';
import { Order } from 'types/order';
import OrderItem from '../OrderItem';

import OrdersContainer from '../OrdersContainer';

const OrdersList = () => {
  const { colors } = useContext(ThemeContext);

  const { isLoading, data } = useAxios<Order[]>({ url: `/${ORDERS}` });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <FlexContainer direction="column" justifyContent="center">
        <PageTitle
          titleColor={colors.purple}
          horizontalBarColor={colors.purple}
        >
          주문목록
        </PageTitle>

        {data?.map((order: Order) => {
          return (
            <FlexContainer margin="40px 0" key={order.id}>
              <OrdersContainer orderNum={order.id}>
                {order.orderDetails?.map((item: CartItem) => (
                  <OrderItem item={item} key={item.id} />
                ))}
              </OrdersContainer>
            </FlexContainer>
          );
        })}
      </FlexContainer>
    </PageContainer>
  );
};

export default OrdersList;
