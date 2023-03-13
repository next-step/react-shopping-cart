import * as Styled from './ExpectedPayment.styled';

const ExpectedPayment = () => {
  return (
    <div>
      <Styled.Top>
        <Styled.Title>결제 예상 금액</Styled.Title>
      </Styled.Top>
      <Styled.ThinLine />
      <div>
        <Styled.Bottom display={'flex'} justifyContent="space-between">
          <Styled.BottomText>결제 예상 금액</Styled.BottomText>
          <Styled.BottomText>21,800원</Styled.BottomText>
        </Styled.Bottom>
        <Styled.ButtonBox display={'flex'} justifyContent="center" alignItems="center">
          <Styled.OrderButton>주문하기 (3개)</Styled.OrderButton>
        </Styled.ButtonBox>
      </div>
    </div>
  );
};
export default ExpectedPayment;
