import { useDialog } from 'hooks';
import * as Styled from './Dialog.styled';

type DialogProps = {
  title: string;
  isOpen: boolean;
};

const Dialog = ({ title, isOpen }: DialogProps) => {
  const { handleOpenDialogUI, handleConfirmButton } = useDialog();
  return isOpen ? (
    <Styled.OverLay>
      <Styled.FlexContainer>
        <Styled.Title>{title}</Styled.Title>
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
