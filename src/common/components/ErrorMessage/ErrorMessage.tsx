import { PropsWithChildren } from 'react';
import * as Styled from './ErrorMessage.styled';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Styled.OverLay>
      <Styled.FlexContainer>
        <Styled.ErrorIcon role="img" />
        <Styled.TextBox>
          <h3>Error</h3>
          {children ? <p>{children}</p> : <p>잠시 오류가 발생하였습니다.</p>}
        </Styled.TextBox>
        <Styled.ErrorMessageButton onClick={() => window.location.reload()}>Try Again</Styled.ErrorMessageButton>
      </Styled.FlexContainer>
    </Styled.OverLay>
  );
};

export default ErrorMessage;
