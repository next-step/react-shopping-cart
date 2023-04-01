import { useDialog } from 'hooks';
import * as Styled from './Dialog.styled';
import type { DialogProps } from './Dialog.types';

const Dialog = ({ title, isOpen }: DialogProps) => {
  const { handleOpenDialogUI, handleConfirmButton } = useDialog();
  return isOpen ? (
    <Styled.OverLay>
      <Styled.FlexContainer>
        <Styled.TitleBox>
          <Styled.Title>{title}</Styled.Title>
        </Styled.TitleBox>
        <Styled.ButtonBox>
          <Styled.DiaLogButton theme="primary" onClick={handleConfirmButton}>
            확인
          </Styled.DiaLogButton>
          <Styled.DiaLogButton theme="primary" onClick={() => handleOpenDialogUI(false)}>
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
