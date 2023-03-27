import { useDialog } from 'hooks';
import * as Styled from './Dialog.styled';

const Dialog = () => {
  const { isOpenDialog, dialogTitle, handleOpenDialogUI, handleConfirmButton } = useDialog();
  return isOpenDialog ? (
    <Styled.OverLay>
      <Styled.FlexContainer>
        <Styled.Title>{dialogTitle}</Styled.Title>
        <Styled.FlexBox>
          <Styled.DiaLogButton theme="primary" onClick={handleConfirmButton}>
            확인
          </Styled.DiaLogButton>
          <Styled.DiaLogButton theme="primary" onClick={() => handleOpenDialogUI(false)}>
            취소
          </Styled.DiaLogButton>
        </Styled.FlexBox>
      </Styled.FlexContainer>
    </Styled.OverLay>
  ) : (
    <></>
  );
};

export default Dialog;
