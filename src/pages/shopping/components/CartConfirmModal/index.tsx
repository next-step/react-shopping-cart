import Button from 'components/Button';
import Modal from 'components/Modal';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import * as StyledCartConfirmModal from './CartConfirmModal.styled';

const CartConfirmModal = ({
  handleModalToggle,
}: {
  handleModalToggle: () => void;
}) => {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate(`/carts/list`);
  };

  return (
    <Modal handleModalToggle={handleModalToggle}>
      <StyledCartConfirmModal.ModalDescription>
        해당 상품이 장바구니에 추가되었습니다.
      </StyledCartConfirmModal.ModalDescription>
      <Button
        color={colors.white}
        backgroundColor={colors.purple}
        onClick={handleCartClick}
      >
        장바구니 바로가기
      </Button>
    </Modal>
  );
};

export default CartConfirmModal;
