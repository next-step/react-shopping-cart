import styled from 'styled-components';
import * as Styled from './Dialog.styled';

const Dialog = () => {
  return (
    <Styled.OverLay>
      <Styled.FlexContainer>
        <Styled.Title>상품을 삭제하시겠습니까?</Styled.Title>
        <Styled.FlexBox>
          <Styled.DiaLogButton theme="primary">확인</Styled.DiaLogButton>
          <Styled.DiaLogButton theme="primary">취소</Styled.DiaLogButton>
        </Styled.FlexBox>
      </Styled.FlexContainer>
    </Styled.OverLay>
  );
};

export default Dialog;
