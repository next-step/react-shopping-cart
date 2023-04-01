import FlexContainer from 'components/FlexContainer';
import Loading from 'components/Loading';
import PageContainer from 'components/PageContainer';
import { ORDERS } from 'constants/orders';
import useAxios from 'hooks/useAxios';
import Checkout from 'pages/shopping/carts/Checkout';
import PageTitle from 'pages/shopping/components/PageTitle';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { CartItem } from 'types/cart';
import { Order } from 'types/order';
import OrderItem from '../OrderItem';
import OrdersContainer from '../OrdersContainer';

const OrdersDetails = () => {
  const { colors } = useContext(ThemeContext);

  const { id } = useParams();
  const { isLoading, data } = useAxios<Order>({ url: `/${ORDERS}/${id}` });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <FlexContainer direction="column">
        <FlexContainer direction="column" justifyContent="center">
          <PageTitle
            titleColor={colors.purple}
            horizontalBarColor={colors.purple}
          >
            주문내역상세
          </PageTitle>

          <FlexContainer margin="40px 0">
            <OrdersContainer orderNum={Number(id)} isListPage={false}>
              {data?.orderDetails?.map((item: CartItem) => {
                return <OrderItem item={item} key={item.id} />;
              })}
            </OrdersContainer>
          </FlexContainer>
        </FlexContainer>

        <Checkout
          total={0}
          flexContainerStyles={{ alignSelf: 'flex-end', flex: '1 0 50%' }}
          isOrderPage
        />
      </FlexContainer>
    </PageContainer>
  );
};

export default OrdersDetails;
