import * as Styled from './MyOrderListHeader..styles';
import type { MyOrderListHeaderProps } from './MyOrderListHeader.types';

const MyOrderListHeader = ({ id }: MyOrderListHeaderProps) => {
  return (
    <Styled.Layout>
      <Styled.Text>{`주문번호 : ${id}`} </Styled.Text>
      <Styled.Text>상세보기</Styled.Text>
    </Styled.Layout>
  );
};
export default MyOrderListHeader;
