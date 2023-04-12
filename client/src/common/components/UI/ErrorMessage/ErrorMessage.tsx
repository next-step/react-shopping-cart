import { PropsWithChildren } from 'react';
import * as Styled from './ErrorMessage.styled';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Styled.OverLay>
      <Styled.FlexContainer>
        <Styled.ErrorIcon />
        <Styled.TextBox>
          <h3>Error</h3>
          <span>새로고침이 필요합니다</span>
          <span>{children}</span>
        </Styled.TextBox>
        <Styled.ErrorMessageButton>Try Again</Styled.ErrorMessageButton>
      </Styled.FlexContainer>
    </Styled.OverLay>
  );
};

export default ErrorMessage;
