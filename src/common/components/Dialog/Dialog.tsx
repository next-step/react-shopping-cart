import { useDialog } from 'common/hooks';
import * as Styled from './Dialog.styled';
import type { DialogProps } from './Dialog.types';

const Dialog = ({ title, isOpen }: DialogProps) => {
  const { closeDialog, handleConfirmButton } = useDialog();
  return isOpen ? (
    <Styled.OverLay data-testid="dialog">
      <Styled.FlexContainer>
        <Styled.TitleBox>
          <Styled.Title>{title}</Styled.Title>
        </Styled.TitleBox>
        <Styled.ButtonBox>
          <Styled.DiaLogButton theme="primary" onClick={handleConfirmButton} data-testid="confirm-button">
            확인
          </Styled.DiaLogButton>
          <Styled.DiaLogButton theme="primary" onClick={closeDialog}>
            취소
          </Styled.DiaLogButton>
        </Styled.ButtonBox>
      </Styled.FlexContainer>
    </Styled.OverLay>
  ) : (
    <></>
  );
};

export default Dialog;
