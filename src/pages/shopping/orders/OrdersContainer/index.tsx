import FlexContainer from 'components/FlexContainer';
import Title from 'components/Title';
import { ORDERS } from 'constants/orders';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import * as StyledOrdersContainer from './OrdersContainer.styled';

interface OrdersContainerProps extends PropsWithChildren {
  orderNum: number;
  isListPage?: boolean;
}

const OrdersContainer = ({
  orderNum,
  isListPage = true,
  children,
}: OrdersContainerProps) => {
  return (
    <FlexContainer direction="column" flex="1">
      <StyledOrdersContainer.FirstBorderBox>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Title fontSize="20px">주문번호: {orderNum} </Title>
          {isListPage && (
            <Link to={`/${ORDERS}/details/${orderNum}`}>상세보기 {'>'} </Link>
          )}
        </FlexContainer>
      </StyledOrdersContainer.FirstBorderBox>
      <StyledOrdersContainer.SecondBorderBox>
        {children}
      </StyledOrdersContainer.SecondBorderBox>
    </FlexContainer>
  );
};

export default OrdersContainer;
