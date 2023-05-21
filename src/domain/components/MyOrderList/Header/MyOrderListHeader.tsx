import * as Styled from './MyOrderListHeader.styles';
import type { MyOrderListHeaderProps } from './MyOrderListHeader.types';
import useMyOrderList from 'domain/components/hooks/useMyOrderList';

const MyOrderListHeader = ({ id }: MyOrderListHeaderProps) => {
  const { moveToDetailPage, isActiveDetailPage } = useMyOrderList(id);
  return (
    <Styled.Layout>
      <Styled.Text data-testid="order-number">{`주문번호 : ${id}`}</Styled.Text>
      {!isActiveDetailPage && (
        <Styled.Text onClick={() => moveToDetailPage(`${id}`)} data-testid="orderDetail-button">
          상세보기
        </Styled.Text>
      )}
    </Styled.Layout>
  );
};
export default MyOrderListHeader;
